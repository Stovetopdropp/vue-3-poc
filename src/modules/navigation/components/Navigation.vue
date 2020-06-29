<template>
    <div>navvvvVVV</div>
</template>

<script>

export default {
    name: 'Navigation',
    async setup() {
        await new Promise((resolve) => {
            setTimeout(() => resolve("loaded"), 1000)
        });

        return { x: 1 };
    },
};

</script>

<style>
    .c-navigation {
    }
</style>

