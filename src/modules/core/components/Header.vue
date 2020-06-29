<template>
    <header class="c-header">
        header
    </header>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    name: 'Header',
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
</style>
