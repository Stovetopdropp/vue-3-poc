import { createStore } from 'vuex';

import navigationModule, { NAVIGATION_MODULE_NAME } from '~modules/navigation/js/navigation-store';

export default function initializeStore() {
    return createStore({
        strict: true,
        state: {
            example: 'value',
        },
        modules: {
            [NAVIGATION_MODULE_NAME]: navigationModule
        }
    });
};
