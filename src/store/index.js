import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  fullScreen: false,
  panelId: null,
  shortcutBar: false
})

export const getters = {
  titleBar(state) {
    return process.platform === 'darwin' && !state.fullScreen
  }
}

export const actions = {
  showShortcutBar({ commit }) {
    commit('setShortcutBar', { shortcutBar: true })
  },
  hideShortcutBar({ commit }) {
    commit('setShortcutBar', { shortcutBar: false })
  }
}

export const mutations = {
  setFullScreen(state, { fullScreen }) {
    state.fullScreen = fullScreen
  },
  setPanelId(state, { panelId }) {
    state.panelId = panelId
  },
  setShortcutBar(state, { shortcutBar }) {
    state.shortcutBar = shortcutBar
  }
}

export const plugins = [createPersistedState()]
