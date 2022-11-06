<template>
  <div class="form-item">
    <label :for="id" :class="['form-item__label', {'form-item__label--filled' : modelValue.length}]" v-if="label">{{ label }}</label>
    <slot :id="id">
      <input
          :class="['form-item__input', ...wrapClass]"
          :type="type"
          :name="id"
          :id="id"
          :value='modelValue'
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :readonly="readonly"
          :minlength="minLength"
          :maxlength="maxLength"
          @change='$emit("change", $event.target.value)'
          @input='$emit("input", $event.target.value)'
      >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: String,
    placeholder: String,
    wrapClass: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: String,
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    minLength: String,
    maxLength: String,
  },
}
</script>
