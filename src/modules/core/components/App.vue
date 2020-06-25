<template>
    <button @click="toggleModalState">Open modal</button>
    <modal v-if="modalOpen">
        <p>Hello, I'm a modal window.</p>
    </modal>
</template>

<script>

import Modal from '~modules/core/components/Modal.vue';

export default {
    components: {
        Modal
    },
    data: () => ({
        modalOpen: true
    }),
    methods: {
        toggleModalState() {
            this.modalOpen = !this.modalOpen;
        }
    }
};
</script>
