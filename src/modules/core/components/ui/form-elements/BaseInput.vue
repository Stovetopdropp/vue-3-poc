<template>
    <div class="c-base-input">
        <div
            class="c-base-input__container"
        >
            <input
                :value="modelValue"
                @input="$emit(
                    'update:modelValue',
                    $event.target.value
                )"
                class="c-base-input__input"
              >
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
        }
    },
};
</script>

<style lang="scss">

</style>
