import axios from "axios";


const instance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`
})

export const api = ({url, ...props}) => {
    const token = localStorage.getItem("token");
    props.headers = {
        ...props.headers,
        Authorization: token ? `Bearer ${token}` : ""
    };
    if ("pk" in props) {
        url = `${url}/${props.pk}`;
    }
    return instance({
        url: url,
        ...props
    });
};

function createAxiosResponseInterceptor() {
    const interceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            axios.interceptors.response.eject(interceptor);
            return refreshAccessToken(error);
        }
    );
}

function refreshAccessToken(error) {
    const formData = new FormData();
    const refresh_token = localStorage.getItem("refreshToken");
    if (refresh_token) {
        formData.append("refresh_token", refresh_token);
        formData.append("grant_type", "refresh_token");
        return axios({
            url: `${import.meta.env.VITE_APP_BASE_URL}/api/auth/oauth/token`,
            method: "POST",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: import.meta.env.VITE_APP_BASE_URL
            }
        })
            .then(({data}) => {
                localStorage.setItem("token", data.access_token);
                localStorage.setItem("refreshToken", data.refresh_token);
                return axios({
                    ...error.response.config,
                    headers: {
                        ...error.response.config.headers,
                        Authorization: `Bearer ${data.access_token}`
                    }
                });
            })
            .catch((error2) => {
                console.log(error2);
                if (error.response.status !== 401) {
                    return Promise.reject(error);
                }
                Clear();
            })
            .finally(createAxiosResponseInterceptor);
    }
    Clear();
    return Promise.reject("Error");
}

function Clear() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
    return null;
}

createAxiosResponseInterceptor();