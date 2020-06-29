<template>
    <ul v-if="flatNavigation" class="c-navigation">
        <li
            v-for="navItem in flatNavigation"
            key="navItem"
            class="c-navigation__item"
        >
            {{ navItem }}
        </li>
    </ul>
</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex';

import { NAVIGATION_MODULE_NAME, LOAD_NAVIGATION } from '~modules/navigation/js/navigation-store';

// this module doesnt support vue 3 properly yet, but would help with namespaced modules
// import { createNamespacedHelpers } from 'vuex-composition-helpers';
// const { useState, useActions } = createNamespacedHelpers(NAVIGATION_MODULE_NAME);
// const { LOAD_NAVIGATION: loadNavigation } = useActions([LOAD_NAVIGATION]);
// const { flatNavigation } = useState(['flatNavigation']);

export default {
    name: 'Navigation',
    async setup() {
        const store = useStore();
        const flatNavigation = computed(() => store.state[NAVIGATION_MODULE_NAME].flatNavigation);

        await store.dispatch(`${NAVIGATION_MODULE_NAME}/${LOAD_NAVIGATION}`);

        return { flatNavigation };
    },
};

</script>

<style>
    .c-navigation {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .c-navigation__item {
        display: inline-block;
    }
</style>

