<template>
    <Header />
    <RouterView :key="$route.path" />
    <ModalSingleton />
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';

import Header from '~modules/core/components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
};
</script>
