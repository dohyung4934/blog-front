import { defineStore } from 'pinia'

interface cmState {
  isShowMenu: boolean
  isLogin: boolean
  userNm: string
}

export const useCmStore = defineStore({
  id: 'cm-store',
  state: (): cmState => ({
    isShowMenu: false,
    isLogin: true,
    userNm: '김아무개'
  })
})
