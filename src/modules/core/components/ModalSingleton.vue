<template>
    <button @click="toggleModalState">Open modal</button>
    <teleport to="#modal-wrapper">
        <Modal
            v-if="modalOpen"
            @close="toggleModalState"
        >
            <p>Hello, I'm a modal window. teleport massive</p>
        </Modal>
    </teleport>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';

export default {
    name: 'ModalSingleton',
    components: {
        Modal: defineAsyncComponent(() => import('~modules/core/components/Modal.vue'))
    },
    setup () {
        const modalOpen = ref(false);
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
