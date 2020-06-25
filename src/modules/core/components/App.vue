<template>
    <button @click="toggleModalState">Open modal</button>
    <modal v-if="modalOpen">
        <p>Hello, I'm a modal window.</p>
    </modal>
</template>

<script>

import { ref } from "vue";

import Modal from '~modules/core/components/Modal.vue';

export default {
    components: {
        Modal
    },
    setup () {
        const modalOpen = ref(true);
        const toggleModalState = () => {
            modalOpen.value = !modalOpen.value;
        };

        return {
            modalOpen,
            toggleModalState
        }
    },
};
</script>
