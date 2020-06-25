<template>
    <RouterView :key="$route.path" />
    <ModalSingleton />
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';

export default {
    name: 'App',
    components: {
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
};
</script>
