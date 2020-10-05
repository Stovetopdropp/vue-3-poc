<template>
    <Layout>
        <div class="c-home">
            <h1>Vue 3 Playground</h1>

            <h3>Form Validation</h3>
            <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="formSchema">
                <Field name="field1" v-slot="{ field }">
                   <!-- v-model="homepageInputValue" is shorthand for v-model:modelValue="homepageInputValue" -->
                    <BaseInput
                        v-bind="field"
                        v-model="field1"
                        name="field1"
                        label="Example"
                        :errorMessage="errors.field1"
                    />
                </Field>
                <br>

                <BaseInputVee
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="Your Name"
                    success-message="Wow good job entering your name bud!!"
                />
                <br>

                <BaseInputVee
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Your Email"
                />
                <br>
                <button type="submit">Submit</button>
            </Form>
            <br>
            <ModalSingleton />
        </div>
    </Layout>
</template>

<script>

import { Field, Form } from 'vee-validate';
import { defineAsyncComponent } from 'vue';
import * as Yup from 'yup';

import Layout from '~modules/core/components/layouts/Layout.vue';

import BaseInput from '~modules/core/components/ui/form-elements/BaseInput.vue';
import BaseInputVee from '~modules/core/components/ui/form-elements/BaseInputVee.vue';

export default {
    name: 'HomepageContainer',
    components: {
        BaseInput,
        BaseInputVee,
        Field,
        Form,
        Layout,
        ModalSingleton: defineAsyncComponent(() => import('~modules/core/components/ModalSingleton.vue'))
    },
    data() {
        return {
            formSchema: Yup.object().shape({
                field1: Yup.string().required(),
                name: Yup.string().min(2).required(),
                email: Yup.string().email().required(),
            })
        };
    },
    methods: {
        onSubmit(values) {
            // this only fires if validation passes
            alert('what a success you are')
        }
    }
};

</script>

<style scoped>
    .c-home {
        padding: 0 24px;
    }
</style>
