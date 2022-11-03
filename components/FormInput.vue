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
          :v-mask="vMask"
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
    vMask: String,
  },
}
</script>

<style lang="scss">
.form-item {
  position: relative;
  width: 100%;
  height: rem(56);
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &--textarea {
    height: auto;

    .form-item__label {
      top: rem(12);
    }

    &:focus-within {
      .form-item__label {
        top: rem(5);
      }
    }
  }

  &:focus-within {
    .form-item__label {
      color: var(--white);
      font-size: rem(16);
      transform: translateY(calc(#{rem(-56)} / 2));
    }

    body:not(.using-mouse) & .form-item__label {
      transform: translateY(calc(#{rem(-56)} / 1.4));
    }

    .form-item__input {
      border-color: var(--white);
    }
  }
}

.form-item__label {
  position: absolute;
  font-weight: 500;
  font-size: rem(18);
  line-height: 1.33;
  color: #9EA8AA;
  transition: all var(--animation);

  &--filled {
    font-size: rem(16);
    transform: translateY(calc(#{rem(-56)} / 2));
  }
}

.form-item__input {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #696B6B;
  color: var(--white);
  transition: all var(--animation);
  padding-top: 5px;
}

textarea.form-item__input {
  height: rem(200);
  resize: none;
}
</style>
