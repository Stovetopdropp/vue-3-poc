export const NAVIGATION_MODULE_NAME = 'navigation';

// Actions
export const LOAD_NAVIGATION = 'LOAD_NAVIGATION';

// Mutations
export const SET_NAVIGATION = 'SET_NAVIGATION';

export default {
    namespaced: true,

    state: {
        flatNavigation: [],
    },

    mutations: {
        [SET_NAVIGATION](state, navigation) {
            state.flatNavigation = navigation;
        },
    },

    actions: {
        async [LOAD_NAVIGATION]({ commit }) {
            const res = await new Promise((resolve) => {
                setTimeout(() => resolve(['item 1', 'item 2', 'item 3']), 2000)
            });

            commit(SET_NAVIGATION, res);
        },
    }
};
