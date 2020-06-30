<template>
    <main class="o-container">
        <slot></slot>
    </main>
</template>

<script>

export default {
    name: 'Layout',
};

</script>

<style>
    .o-container {
        position: relative;
        padding-top: 64px;
    }
</style>
