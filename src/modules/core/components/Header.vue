<template>
    <header class="c-header">
        <Suspense>
            <template #default>
                <Navigation />
            </template>
            <template #fallback>
                <div class="c-header__loader">
                   <p>Loading Navigation...</p>
                </div>
            </template>
        </Suspense>
    </header>
</template>

<script>

import Navigation from '~modules/navigation/components/Navigation.vue';

export default {
    name: 'Header',
    components: {
        Navigation
    }
};

</script>

<style>
    .c-header {
        display: flex;
        padding: 0 16px;
        max-width: 100vw;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 48px;
        z-index: 10;
        background-color: black;
        color: white;
    }

    .c-header__loader {
        width: 100%;
        text-align: center;
        align-self: center;
    }

</style>
