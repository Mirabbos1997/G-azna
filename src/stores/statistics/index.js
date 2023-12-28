import {defineStore} from "pinia";
import {api} from "@/api";
import {useCore} from "@/stores/core";

export const useStatistics = defineStore('statistics',{
    state: ()=>({
        stateByInitiative:{
            series: [],
            options:  {
                colors: ['#1D728E','#A2DF5F'],
                chart: {
                    type: 'bar',
                    height: 700,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: false,
                            }
                        }
                    },
                },
                xaxis: {},
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            date: Date.now(),
            loader: false,
            allInitiativeCount:0,
            allQuarterCount: 0,
            passedCount:0,
            notPassedCount: 0,
            donutSeries: [],
            donutOptions:{
                labels: [ 'Qabul qilingan','Barcha kelib tushgan'],
                colors: ['#1D728E','#A2DF5F'],
                legend: false,
            }
        },
        stateByCategory:{
            series:[],
            donutOptions:{},
            allWinnerQuarterCount: 0,
            allWinnerAmount: 0,
            allWinnerInitiativesCount: 0,
            maxVoteCount: 0,
            minVoteCount: 0,
        },
        stateByCountry:{
            allAllocatedSum: 0,
            leftSeries: [],
            rightSeries: [],
            leftOptions: {
                colors: ['#00BDFB','#DFC229'],
                chart: {
                    type: 'bar',
                    height: 500,
                    stacked: true,
                    stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: false,
                            }
                        }
                    },
                },
                xaxis: {},
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (v) {
                            return new Intl.NumberFormat('ru-Ru').format(v);
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                dataLabels: {
                    formatter: (v)=>{
                        return new Intl.NumberFormat('ru-Ru').format(v);
                    }
                }
            },
            rightOptions: {
                colors: ['#00BDFB','#DFC229'],
                chart: {
                    type: 'bar',
                    height: 500,
                    stacked: true,
                    stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: true,
                            }
                        }
                    },
                },
                xaxis: {},
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (v) {
                            return new Intl.NumberFormat('ru-Ru').format(v);
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                dataLabels: {
                    formatter: (v)=>{
                        return `${new Intl.NumberFormat('ru-Ru').format(v / 1000000)} mln`;
                    }
                }
            }
        },
        stateByVote:{
            barSeries: [],
            barOptions: {
                dataLabels: {
                    formatter: v=> new Intl.NumberFormat('ru-Ru').format(v)
                },
                colors: ['#00BDFB'],
                chart: {
                    type: 'bar',
                    height: 700,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: false,
                            }
                        }
                    },
                },
                xaxis: {},
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            radarSeries: [],
            radarOptions: {
                markers:{
                    strokeColors: '#00BDFB'
                },
                fill:{
                  opacity: 0
                },
                stroke: {
                    width: 3
                },
                tooltip: {
                    y: {
                        formatter: v => new Intl.NumberFormat('ru-Ru').format(v),
                    }
                },
            },
        }
    }),
    actions:{
        getStatisticsByInitiative(id){
            const core = useCore();
            this.stateByInitiative.loader = true
            api({
                url:`v2/info/statistics/initiative`,
                params: {
                    boardId: id
                }
            }).then(({data})=>{
                this.stateByInitiative.series = [
                    {
                        name: 'Qabul qilingan',
                        data: data.items.map(v=>v.passedCount)
                    },{
                        name: 'Qabul qilinmagan',
                        data: data.items.map(v=>v.notPassedCount)
                    }
                ];
                this.stateByInitiative.options = {
                    ...this.stateByInitiative.options,
                    xaxis: {
                        categories: data.items.map(v=>v.regionName),
                    },
                }
                this.stateByInitiative.passedCount = data.allPassedCount;
                this.stateByInitiative.notPassedCount = data.allNotPassedCount;
                this.stateByInitiative.allInitiativeCount = data.allInitiativeCount;
                this.stateByInitiative.allQuarterCount = data.allQuarterCount;
                this.stateByInitiative.donutSeries = [data.allPassedCount,data.allNotPassedCount]
            })
                .catch(err=>{
                    core.switchStatus(err);
                })
                .finally(()=>{
                    this.stateByInitiative.loader = false
                })
        },
        getStatisticsByCategory(id){
            const core = useCore();
            api({
                url: `v2/info/statistics/initiative-category/${id}`,
            }).then(({data})=>{
                this.stateByCategory.series = Object.values(data.allWinnerCategoryCount);
                this.stateByCategory.donutOptions = {
                    labels:Object.values(data.allWinnerCategoryName),
                    legend: {
                       show: true,
                        position: 'bottom'
                    },
                    colors: ['#1ED0A6','#1C82FF','#565874','#00BDFB','#1ED0A6','#007197','#007197','#00BDFB']
                };
                this.stateByCategory.allWinnerQuarterCount = data.allWinnerQuarterCount;
                this.stateByCategory.allWinnerAmount = data.allWinnerAmount;
                this.stateByCategory.allWinnerInitiativesCount = data.allWinnerInitiativesCount;
                this.stateByCategory.maxVoteCount = data.maxVoteCount;
                this.stateByCategory.minVoteCount = data.minVoteCount;
            })
                .catch(err=>{
                    core.switchStatus(err);
                })
        },
        getStatisticsByCountry(id){
            const core = useCore();
            api({
                url: `v2/info/statistics/district-budget-debt/${id}`,
            }).then(({data})=>{
                const leftS = [];
                const rightS = [];
                for (const index in data.items) {
                    if(index < data.items.length / 2){
                        leftS.push({
                            debtSum: data.items[index].debtSum,
                            paidSum: data.items[index].paidSum,
                            title: data.items[index].name
                        })
                    }else{
                        rightS.push({
                            debtSum: data.items[index].debtSum,
                            paidSum: data.items[index].paidSum,
                            title: data.items[index].name
                        })
                    }
                }
                this.stateByCountry.leftSeries = [
                    {
                        name: 'Жамгармага утказилган',
                        data: leftS.map(v=>v.paidSum)
                    },{
                        name: 'Карздорлик',
                        data: leftS.map(v=>v.debtSum)
                    }
                ];
                this.stateByCountry.rightSeries = [
                    {
                        name: 'Жамгармага утказилган',
                        data: rightS.map(v=>v.paidSum)
                    },{
                        name: 'Карздорлик',
                        data: rightS.map(v=>v.debtSum)
                    }
                ];
                this.stateByCountry.leftOptions = {
                    ...this.stateByCountry.leftOptions,
                    xaxis: {
                        categories: leftS.map(v=>v.title),
                    },
                }
                this.stateByCountry.rightOptions = {
                    ...this.stateByCountry.leftOptions,
                    xaxis: {
                        categories: rightS.map(v=>v.title),
                    },
                }
                this.stateByCountry.allAllocatedSum = data.allAllocatedSum;
            })
                .catch(err=>{
                    core.switchStatus(err);
                })
        },
        getStatisticByVote(id){
            const core = useCore();
            api({
                url: `v2/info/statistics/votes-by-area/${id}`,
            }).then(({data})=>{
                const op = [
                    {
                        name: 'Овозлар сони',
                        data: data.map(v=>v.allVotesCount)
                    }
                ]
                this.stateByVote.radarSeries = op;
                this.stateByVote.barSeries = op;
                this.stateByVote.radarOptions = {
                    ...this.stateByVote.radarOptions,
                    xaxis:{
                        categories: data.map(v=>v.name),
                        labels: {
                            style: {
                                color: ['#00BDFB'],
                                fontSize: '12px',
                                cssClass: 'test'
                            }
                        }
                    }
                }
                this.stateByVote.barOptions = {
                    xaxis:{
                        categories: data.map(v=>v.name),
                    }
                }
            })
                .catch(err=>{
                    core.switchStatus(err);
                })
        },
    }
})