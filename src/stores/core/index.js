import { defineStore } from 'pinia'
import { api } from '@/api'

export const useCore = defineStore('core', {
  state: () => ({
    toast: null,
    regions: {
      list: [],
      loader: false
    },
    districts: {
      list: [],
      loader: false
    },
    initiativeCategories: {
      list: [],
      loader: false
    },
    budgetParams: {
      list: [],
      loader: false
    },
    stateBudget: {
      years_list: [],
      budget_sum: null,
      loader: false
    },

    mainMenu: [
      {
        title: 'Портал',
        url: null,
        children: [
          {
            title: 'Savol-javob',
            url: '/portal/questions'
          },
          {
            title: 'Asosiy tushunchalar',
            url: '/portal/basic/concepts'
          },
          {
            title: 'Bog‘lanish',
            url: '/portal/connect'
          },
          {
            title: 'Biz haqimizda',
            url: '/portal/about/us'
          },
          {
            title: 'Foydali ma’lumotlar',
            url: '/portal/information'
          },
          {
            title: 'Yangiliklar',
            url: '/portal/news'
          }
        ],
        i18Key: 'portal.title'
      },
      {
        title: 'Бюджетная система',
        url: null,
        children: [
          {
            title: 'Параметры государственного бюджета',
            url: '/budget-system',
            i18Key: 'budget_system.params_of_budget'
          },
          {
            title: 'Местный бюджет',
            url: '/budget-system/local-budget',
            i18Key: 'budget_system.local_budget'
          },
          {
            title: 'Государственный целевые фонды',
            url: '/budget-system/trust-funds',
            i18Key: 'budget_system.state_budget'
          },
          {
            title: 'Государственный долг',
            url: '/budget-system/state-debt',
            i18Key: 'budget_system.state_debt'
          },
          {
            title: 'Дополнительные источники',
            url: '/budget-system/further-sources',
            i18Key: 'budget_system.other_history'
          },
          {
            title: 'Территориальные финансовые органы',
            url: '/budget-system/territorial-organs',
            i18Key: 'budget_system.finance_state'
          },
          {
            title: 'Целевые индикаторы министерств и ведомств',
            url: '/budget-system/target-indicators',
            i18Key: 'budget_system.ministries'
          },
          {
            title: 'Финансовый контроль',
            url: '/budget-system/financial-control',
            i18Key: 'budget_system.finance_control'
          }
        ],
        i18Key: 'budget_system.title'
      },
      {
        title: 'Исполнении бюджета',
        url: null,
        children: [
          {
            title: 'Ташаббусли бюджетлаштириш',
            url: '/execution-budget'
          },
          {
            title: 'Бюджет ижроси ҳамда лойиҳалари юзасидан хулосалар',
            url: '/execution-budget/conclusion'
          },
          {
            title: 'Молиявий назорат',
            url: '/execution-budget/finance-control'
          },
          {
            title: 'Бюджет ижроси хисоботлари',
            url: '/execution-budget/reports'
          }
        ],
        i18Key: 'execution_budget.title'
      },
      {
        title: 'Инициативный бюджет',
        url: null,
        children: [
          {
            title: 'Инициативы',
            url: '/boards',
            i18Key: 'initiatives.initiatives_list'
          },
          {
            title: 'Xisobotlar',
            url: '/boards/reports',
            i18Key: 'initiatives.initiatives_budget'
          },
          {
            title: 'Budjet qonunlari',
            url: '/boards/laws',
            i18Key: 'initiatives.budget_laws'
          },
          {
            title: 'Fiqarolar uchun budget',
            url: '/boards/humans',
            i18Key: 'initiatives.budget_for_humans'
          }
        ],
        i18Key: 'initiatives.title'
      }
    ],
    currency: localStorage.getItem('currency') ? JSON.parse(localStorage.getItem('currency')) : {}
  }),
  actions: {
    setToast(obj = null) {
      this.toast = obj
    },
    switchStatus(err) {
      try {
        const { response, message = 'Error' } = err
        const { data, status } = response
        let toastMessage = {
          type: 'error',
          message: message
        }
        if (status >= 200 && status <= 300) {
          toastMessage = {
            message: 'Success',
            type: 'success'
          }
        }
        if (status >= 400) {
          if (typeof data !== 'string' && 'message' in data && data.message !== '') {
            toastMessage.message = data.message
          }
        }
        this.setToast(toastMessage)
      } catch (err) {
        this.setToast({
          type: 'error',
          message: 'ERROR!'
        })
      }
    },
    getRegions() {
      const regions = localStorage.getItem('regions')
      if (regions) {
        this.regions.list = JSON.parse(regions)
      } else {
        this.regions.loader = true
        try {
          api({
            url: 'v1/regions'
          })
            .then((res) => {
              localStorage.setItem('regions', JSON.stringify(res.data.regions))
              this.regions.list = res.data.regions
            })
            .catch((err) => {
              this.setToast({
                type: 'error',
                message: err
              })
            })
            .finally(() => {
              this.regions.loader = false
            })
        } catch (err) {
          this.switchStatus(err)
        }
      }
    },
    getBudgetParams() {
      if (!this.budgetParams.list.length) {
        try {
          this.budgetParams.loader = true
          api({
            url: 'v1/budget-params'
          })
            .then(({ data }) => {
              this.budgetParams.list = data
            })
            .catch((err) => {
              this.switchStatus(err)
            })
            .finally(() => {
              this.budgetParams.loader = false
            })
        } catch (err) {
          this.switchStatus(err)
        }
      }
    },

    getStateBudgetYears() {
      if (!this.stateBudget.years_list.length) {
        try {
          this.stateBudget.loader = true
          api({
            url: 'v1/state-budget-years'
          })
            .then(({ data }) => {
              this.stateBudget.years_list = data
            })
            .catch((err) => {
              this.switchStatus(err)
            })
            .finally(() => {
              this.stateBudget.loader = false
            })
        } catch (err) {
          this.switchStatus(err)
        }
      }
    },

    getStateBudgetSums(year) {
      try {
        this.stateBudget.loader = true
        api({
          url: 'v1/state-budget-sums',
          params: { year }
        })
          .then(({ data }) => {
            this.stateBudget.budget_sum = data
          })
          .catch((err) => {
            this.switchStatus(err)
          })
          .finally(() => {
            this.stateBudget.loader = false
          })
      } catch (err) {
        this.switchStatus(err)
      }
    },

    getDistrict(region_id) {
      try {
        this.districts.loader = true
        api({
          url: `v1/districts`,
          params: {
            region_id
          }
        })
          .then((res) => {
            this.districts.list = res.data.districts
            console.log()
          })
          .catch((err) => {
            this.switchStatus(err)
          })
          .finally(() => {
            this.districts.loader = false
          })
      } catch (err) {
        this.switchStatus(err)
      }
    },
    getInitiativeCategories() {
      if (!this.initiativeCategories.list.length) {
        try {
          this.initiativeCategories.loader = true
          api({
            url: 'v1/initiative-categories'
          })
            .then(({ data }) => {
              this.initiativeCategories.list = data.initiative_categories
            })
            .catch((err) => {
              this.switchStatus(err)
            })
            .finally(() => {
              this.initiativeCategories.loader = false
            })
        } catch (err) {
          this.switchStatus(err)
        }
      }
    },
    getCurrency() {
      const day = new Date(Date.now()).getDate()
      if (!('dey' in this.currency && day === this.currency.dey)) {
        api({
          url: 'v1/currency'
        })
          .then(({ data }) => {
            this.currency = data.currency
            localStorage.setItem(
              'currency',
              JSON.stringify({
                ...data.currency,
                dey: day
              })
            )
          })
          .catch((err) => {
            this.switchStatus(err)
          })
      }
    }
  }
})
