import {$themeBreakpoints} from '@themeConfig'

export default {
    namespaced: true,
    state: {
        loading: false,
        windowWidth: 0,
        shallShowOverlay: false,
    },
    getters: {
        currentBreakPoint: state => {
            const {windowWidth} = state
            if (windowWidth >= $themeBreakpoints.xl) return 'xl'
            if (windowWidth >= $themeBreakpoints.lg) return 'lg'
            if (windowWidth >= $themeBreakpoints.md) return 'md'
            if (windowWidth >= $themeBreakpoints.sm) return 'sm'
            return 'xs'
        },
    },
    mutations: {
        UPDATE_WINDOW_WIDTH(state, val) {
            state.windowWidth = val
        },
        UPDATE_LOADING(state, val) {
            state.loading = val
        },
        TOGGLE_OVERLAY(state, val) {
            state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
        },
    },
    actions: {},
}
