import { createStore } from 'vuex'

const store = createStore({
	state: {
		memos: []
	},
	getters: {
		memos(state) { return state.memos }
	},
	mutations: {
		PUSH_MEMO: (state, payload) => { state.memos.push(payload) },
		SWITCH_MEMO_DONE_STATUS: (state, payload) => { const memo = state.memos.find(item => item.id === payload); memo.isDone = !memo.isDone }
	}
})

export default store