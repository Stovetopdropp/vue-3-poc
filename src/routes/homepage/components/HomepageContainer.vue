<template>
    <Layout>
        <h1>Its the homepage yall</h1>
        <!--
            v-model="homepageInputValue"
            is shorthand for
            v-model:modelValue="homepageInputValue"
        -->
        <h3>Single v-model binding</h3>
        <BaseInput
            v-model="homepageInputValue"
        />
    </Layout>
</template>

<script>

import Layout from '~modules/core/components/layouts/Layout.vue';

import BaseInput from '~modules/core/components/ui/form-elements/BaseInput.vue';

export default {
    name: 'HomepageContainer',
    components: {
        Layout,
        BaseInput
    },
    data() {
        return {
            homepageInputValue: '',
        }
    }
};

</script>
