<template>
    <Form @submit="handleSubmit" :validation-schema="validationSchema">
        <slot></slot>
        <div :class="buttonContainerClass">
            <button
                type="submit"
                :class="buttonClass"
                :disabled="isDisabled"
            >
                {{ submitButton.text }}
            </button>
        </div>
    </Form>
</template>

<script>

import { Form } from 'vee-validate';

export default {
    name: 'BaseForm',
    components: {
        Form
    },
    props: {
        validationSchema: {
            type: Object,
            default: {}
        },
        onSubmit: {
            type: Function,
            required: true,
        },
        submitButton: {
            type: Object,
            required: true,
            validator: obj => !!obj.text,
        },
        shouldSetMinLoadTime: {
            type: Boolean,
            default: false,
        },
        shouldAllowResubmission: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            hasBeenSubmitted: false,
            isLoading: false,
            buttonClass: this.submitButton.class || '',
            buttonContainerClass: this.submitButton.buttonContainerClass || '',
            submitDebounce: 500,
            minimumLoadTime: 500,
        };
    },
    computed: {
        isDisabled() {
            return this.submitButton.disabled || false;
        },
    },
    methods: {
        handleSubmit() {
            if (!this.hasBeenSubmitted) {
                this.isLoading = true;
                this.hasBeenSubmitted = true;

                this.onSubmit()
                    .catch(() => {
                        setTimeout(() => {
                            this.hasBeenSubmitted = false;
                        }, this.submitDebounce);
                    })
                    .finally(() => {
                        if (this.shouldSetMinLoadTime) {
                            setTimeout(() => {
                                this.isLoading = false;
                            }, this.submitDebounce);
                        } else {
                            this.isLoading = false;
                        }

                        if (this.shouldAllowResubmission) {
                            setTimeout(() => {
                                this.hasBeenSubmitted = false;
                            }, this.submitDebounce);
                        }
                    });
            }
        },
    },
};
</script>

<style lang="scss">

</style>


