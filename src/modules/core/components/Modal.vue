<template>
    <div class="modal">
        <slot></slot>
        <button @click="$emit('close')">Dismiss</button>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    emits: ['close']
}

</script>

<style scoped>
    /* allows you to target slot content with scoped rules in the component providing the slot */
    ::v-slotted(p) {
        font-style: italic;
    }
</style>
