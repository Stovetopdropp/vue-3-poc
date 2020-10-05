<template>
    <div class="c-base-input">
        <div
            class="c-base-input__container"
        >
            <label :for="name" class="c-base-input__label">{{ label }}</label>
            <input
                :value="modelValue"
                :name="name"
                @input="$emit(
                    'update:modelValue',
                    $event.target.value
                )"
                class="c-base-input__input"
              >
              <p class="c-base-input__error-text" v-show="errorMessage">
                  {{ errorMessage }}
              </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BaseInput',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        errorMessage: {
            type: String,
            default: '',
        }
    },
};
</script>

<style lang="scss" scoped>

    .c-base-input {
        &__error-text {
            color: red;
        }
    }

</style>
