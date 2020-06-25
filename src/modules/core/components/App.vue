<template>
    <button @click="toggleModalState">Open modal</button>
    <teleport to="#modal-wrapper">
        <modal
            v-if="modalOpen"
            @close="toggleModalState"
        >
            <p>Hello, I'm a modal window. teleport massive</p>
        </modal>
    </teleport>
</template>

<script>

import { ref } from 'vue';

import Modal from '~modules/core/components/Modal.vue';

export default {
    name: 'App',
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
