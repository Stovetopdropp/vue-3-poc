<template>
    <div class="c-modal__outer">
        <div class="c-modal">
            <slot></slot>
            <button @click="$emit('close')">Dismiss</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    emits: ['close']
}

</script>

<style lang="scss" scoped>
    /* allows you to target slot content with scoped rules in the component providing the slot */
    ::v-slotted(p) {
        font-style: italic;
    }

    .c-modal {
        width: 100%;
        height: 100%;
        background-color: $color-white;

        &__outer {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
        }
    }

</style>
