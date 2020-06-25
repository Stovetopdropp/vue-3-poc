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
