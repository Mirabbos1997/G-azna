import {defineStore} from "pinia";
import axios from "axios";
import {useCore} from "@/stores/core";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/old-api`
});

export const useReports = defineStore('reports',{
    state:() => ({
        listOfYears: [],
        loader: false,
        reportByPk: [],
        listLaws: {
            list: [],
            count: 0,
        },
        listHumans:{
            list: [],
            count: 0
        },
    }),
    actions:{
        getListYears(){
            this.loader = true
            api({
                url: 'v1/reports/kvartal-year/list/'
            }).then(({data})=>{
                this.listOfYears = data;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false
            })
        },
        getByPk(pk){
            this.loader = true
            api({
                url: `v1/reports/kvartal/${pk}/attachments/`,
            }).then(({data})=>{
                this.reportByPk = data;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false
            })
        },
        getListLaws(limit = 10,offset = 0){
            this.loader = true
            api({
                url: 'v1/user/legislation/post/list/',
                params:{
                    limit,offset
                }
            }).then(({data})=>{
                this.listLaws.list = data.results;
                this.listLaws.count = data.count;

                console.log(this.listLaws);
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false
            })
        },
        getListHumans(limit = 10,offset = 0){
            this.loader = true
            api({
                url: 'v1/user/publicbudget/post/list',
                params:{
                    limit,offset
                }
            }).then(({data})=>{
                this.listHumans.list = data.results;
                this.listHumans.count = data.count;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false
            })
        },
    }
})