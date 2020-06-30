<template>
    <Header />
    <RouterView :key="$route.path" />
    <ModalSingleton />
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';

// Load this before importing any components, this ensures that all of our global
// classes come first in the generated app.css file, followed by
// any component-specific classes
import '~scss/global/global-styles.scss';

import Header from '~modules/core/components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
};
</script>
