import {defineStore} from "pinia";
import axios from "axios";
import {useCore} from "@/stores/core";


const api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/old-api`
});
export const useExecutionBudget =  defineStore('executionBudget',{
    state: ()=>({
        list: [],
        loader: false,
        listCount: 0,
        controlData: null
    }),
    actions: {
        getExecutionBudgetList(){
            this.loader = true;
            api({
                url: 'v1/user/budget/list/'
            }).then(({data})=>{
                this.list = data;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
               
                this.loader = false;
            })
        },
        getExecutionBudgetConclusionList(limit = 10,offset = 0){
            this.loader = true;
            api({
                url: 'v1/user/conclusion/post/list/',
                params: {
                    offset: offset,
                    limit: limit
                }
            }).then(({data})=>{
                this.list = data.results;
                this.listCount = data.count;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false;
            })
        },
        getExecutionBudgetReportsList(){
            this.loader = true;
            api({
                url: 'v1/user/post/finkontrol/',
            }).then(({data})=>{
                this.controlData = data;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
               
                this.loader = false;
            })

        },
        getExecutionBudgetReportsBySlug(slug){
            this.loader = true;
            api({
                url: `v1/user/post/${slug}`,
            }).then(({data})=>{
                this.controlData = data;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{

                this.loader = false;
            })

        },
        getExecutionBudgetControlList(limit = 10, offset = 0){
            this.loader = true;
            api({
                url: 'v1/user/violations/post/list/',
                params: {
                    offset: offset,
                    limit: limit
                }
            }).then(({data})=>{
                this.list = data.results;
                this.listCount = data.count;
            }).catch(err=>{
                useCore().switchStatus(err);
            }).finally(()=>{
                this.loader = false;
            })
        },
    }
})