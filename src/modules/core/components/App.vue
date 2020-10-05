<template>
    <Header />
    <RouterView :key="$route.path" />
</template>

<script>

// Load this before importing any components, this ensures that all of our global
// classes come first in the generated app.css file, followed by
// any component-specific classes
import '~scss/global/global-styles.scss';

import Header from '~modules/core/components/Header.vue';

export default {
    name: 'App',
    components: {
        Header
    },
};
</script>
