import { api } from '@/api'
import { defineStore } from 'pinia'
import { useCore } from '@/stores/core'

export const useBoards = defineStore('boards', {
  state: () => ({
    list: [],
    loader: true,
    archive: [],
    archiveLoader: true,
    initiatives: [],
    initiativesLoader: false,
    initiativesTotalCount: 0,
    boardInfo: {},
    initiative: {},
    initiativeLoader: false,
    initiativePageSize: 12,
    initiativePage: 0,
    regionId: null,
    categoryId: null,
    districtId: null,
    votes: {
      list: [],
      loader: false,
      count: 0
    }
  }),
  actions: {
    getDiffDate(date1, date2) {
      const review1 = new Date(date1)
      const review2 = new Date(date2)
      const diffTime = Math.abs(review2 - review1)
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    },
    getList() {
      this.loader = true
      api({
        url: '/v1/boards'
      })
        .then(({ data }) => {
          this.list = data.boards
        })
        .catch((err) => {
          const core = useCore()
          core.switchStatus(err)
          console.log(err)
        })
        .finally(() => {
          this.loader = false
        })
    },
    getArchive() {
      this.archiveLoader = true
      api({
        url: '/v1/archive/boards'
      })
        .then(({ data }) => {
          this.archive = data.map((item) => {
            return {
              id: item.id,
              title: item.type === 1 ? 'Tashabbusli Budget' : "Mening yo'lim",
              total_amount: item.budget,
              total_debt: 324628000000,
              year: item.year,
              season: item.season,
              initiatives_count: item.application_count,
              accept_start_date: item.start_date,
              accept_end_date: item.end_date,
              review_start_date: item.waiting_stage.start_date,
              review_end_date: item.waiting_stage.end_date,
              voting_start_date: item.voting_stage.start_date,
              voting_end_date: item.voting_stage.end_date,
              type: item.type === 1 ? 'INITIATIVE' : 'MY_ROAD',
              stage: 'FINAL'
            }
          })
        })
        .catch((err) => {
          const core = useCore()
          core.switchStatus(err)
          console.log(err)
        })
        .finally(() => {
          this.archiveLoader = false
        })
    },
    getInitiatives(id, params = {}) {
      const core = useCore()
      try {
        this.initiativesLoader = true
        api({
          url: `v2/info/board/${id}`,
          params
        })
          .then(({ data }) => {
            this.initiatives = data.content
            this.initiativesTotalCount = data.totalElements
          })
          .catch((err) => {
            core.switchStatus(err)
          })
          .finally(() => {
            this.initiativesLoader = false
          })
      } catch (err) {
        core.switchStatus(err)
      }
    },
    getBoardInfo(boardId) {
      if (!Object.keys(this.boardInfo).length) {
        const core = useCore()
        try {
          api({
            url: `v1/boards/${boardId}`,
            params: {
              regionId: this.regionId,
              districtId: this.districtId
            }
          })
            .then(({ data }) => {
              const dateNow = new Date(Date.now())
              let isActive = 0
              let diff = new Date(data.voting_end_date) - dateNow
              if (diff > 0) {
                isActive = 'PASSED'
              }
              diff = new Date(data.accept_end_date) - dateNow
              if (diff > 0) {
                isActive = 'INITIAL'
              }
              if(data.stage === 'FINAL'){
                        isActive = 'WINNER'
                    }
                    this.boardInfo = {
                        ...data,
                        diffReview: this.getDiffDate(data.review_start_date,data.review_end_date),
                        diffAccept: this.getDiffDate(data.accept_start_date,data.accept_end_date),
                        diffVoting: this.getDiffDate(data.voting_start_date, data.voting_end_date),
                        isActiveStep: isActive
                    }
            })
            .catch((err) => {
              core.switchStatus(err)
            })
        } catch (err) {
          core.switchStatus(err)
        }
      }
    },
    getInitiative(id, type) {
      if (this.initiatives.length && type !== 'my-road') {
        const candidate = this.initiatives.find((v) => v.id === id)
        if (candidate) {
          this.initiative = candidate
        }
      } else {
        const core = useCore()
        try {
          this.initiativeLoader = true
          api({
            url: `v2/info/initiative/${id}`
          })
            .then(({ data }) => {
              this.initiative = data
            })
            .catch((err) => {
              core.switchStatus(err)
            })
            .finally(() => {
              this.initiativeLoader = false
            })
          api({
            url: `v2/info/initiative/count/${id}`
          })
            .then(({ data }) => {
              this.initiative = {
                ...this.initiative,
                voteCount: data.count
              }
            })
            .catch((err) => {
              core.switchStatus(err)
            })
        } catch (err) {
          core.switchStatus(err)
        }
      }
    },
    getStatisticInfo(id) {
      const core = useCore()
      try {
        api({
          url: `v2/info/statistics/board-budget-sum/${id}`,
          params: {
            regionId: this.regionId,
            districtId: this.districtId
          }
        })
          .then(({ data }) => {
            this.boardInfo = {
              ...this.boardInfo,
              budgetSum: data.budgetSum
            }
          })
          .catch((err) => {
            core.switchStatus(err)
          })
          .finally(() => {
            this.votes.loader = false
          })
      } catch (err) {
        core.switchStatus(err)
        this.votes.loader = false
      }
    },
    getVotes(id, params = { size: 10, page: 0 }) {
      const core = useCore()
      try {
        this.votes.loader = true
        api({
          url: `v2/info/votes/${id}`,
          params
        })
          .then(({ data }) => {
            this.votes.list = data.content
            this.votes.count = data.totalElements
          })
          .catch((err) => {
            core.switchStatus(err)
          })
          .finally(() => {
            this.votes.loader = false
          })
      } catch (err) {
        core.switchStatus(err)
        this.votes.loader = false
      }
    },
    setInitiativePage(page) {
      this.initiativePage = page
    },
    setInitiativePageSize(size) {
      this.initiativePageSize = size
    },
    setRegionId(v) {
      this.regionId = v
    },
    setDistrictId(v) {
      this.districtId = v
    },
    setCategoryId(v) {
      this.categoryId = v
    }
  }
})
