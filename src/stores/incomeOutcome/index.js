import { api } from '@/api'
import { defineStore } from 'pinia'
import { useCore } from '@/stores/core'

export const useStateBudget = defineStore('stateBudget', {
  state: () => ({
    state_budget_years: [],
    state_budget_years_loader: false,
    state_budget_rows: [],
    state_budget_rows_loader: false
  }),
  actions: {
    getStateBudgetYears(type) {
      this.state_budget_years_loader = true
      api({
        url: '/v1/state-budget',
        params: { info_type: type }
      })
        .then(({ data }) => {
          this.state_budget_years = data
          if (data.length) {
            this.getStateBudgetRows(data[0].id)
          }
        })
        .catch((err) => {
          const core = useCore()
          core.switchStatus(err)
          console.log(err)
        })
        .finally(() => {
          this.state_budget_years_loader = false
        })
    },
    getStateBudgetRows(id) {
      const core = useCore()
      try {
        this.state_budget_rows_loader = true
        api({
          url: `/v1/state-budget-row`,
          params: { state_budget_id: id }
        })
          .then(({ data }) => {
            console.log(data)
            this.state_budget_rows = data
          })
          .catch((err) => {
            core.switchStatus(err)
          })
          .finally(() => {
            this.state_budget_rows_loader = false
          })
      } catch (err) {
        core.switchStatus(err)
      }
    }
  }
})
