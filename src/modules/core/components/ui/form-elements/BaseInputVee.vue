<template>
    <div
        class="c-base-input"
        :class="{ 'has-error': meta.failed, success: meta.passed }"
        >
        <label :for="name" class="c-base-input__label">{{ label }}</label>
        <input
            :name="name"
            :id="name"
            :type="type"
            :value="inputValue"
            @input="handleChange"
            class="c-base-input__input"
            />
        <p :class="{
            'c-base-input__error-text': !!errorMessage,
            'c-base-input__success-text': !errorMessage,
        }" v-show="meta.validated">
            {{ errorMessage || successMessage }}
        </p>
    </div>
</template>
<script>

import { useField } from "vee-validate";

export default {
    name: 'BaseInputVee',
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        successMessage: {
            type: String,
            default: "",
        }
    },
    setup(props) {
        // we don't provide any rules here because we are using form-level validation
        // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
        const {
            value: inputValue,
            errorMessage,
            onBlur,
            handleChange,
            meta
        } = useField(props.name, undefined, {
            initialValue: props.value
        });

        return {
            handleChange,
            onBlur,
            errorMessage,
            inputValue,
            meta
        };
    }
};
</script>
<style lang="scss" scoped="">

    .c-base-input {
        &__label {
            margin-right: 8px;
        }

        &__input {

        }

        &__error-text {
            color: red;
        }

         &__success-text {
            color: green;
        }
    }

</style>
