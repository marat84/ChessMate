<template>
  <div class="form-item">
    <label :for="id" :class="['form-item__label', {'form-item__label--filled' : modelValue.length}]" v-if="label">{{ label }}</label>
    <slot :id="id">
      <select
          :class="['form-item__input', ...wrapClass]"
          :name="id"
          :id="id"
          :value='modelValue'
          :disabled="disabled"
          :required="required"
          @change='$emit("change", $event.target.value)'
          @input='$emit("input", $event.target.value)'
      >
        <option :value="item.value" v-for="item in options" :key="item.id">{{ item.name }}</option>
      </select>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
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
  },
}
</script>
