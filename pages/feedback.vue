<template>
  <section class="form-section g-container-narrow">
    <h2 class="inner-title mb-90">{{ $t('nav7') }}</h2>
    <form @submit.prevent="submit">
      <FormInput
          class="mb-60"
          id="add-name"
          :label="$t('feedbackText1')"
          v-model="form.name"
          :modelValue="form.name"
          required
      ></FormInput>
      <FormInput
          class="mb-60"
          id="add-email"
          :label="$t('feedbackText2')"
          v-model="form.email"
          :modelValue="form.email"
          required
      ></FormInput>
      <FormInput
          type="tel"
          class="mb-60"
          id="add-phone"
          :label="$t('feedbackText3')"
          v-model="form.phone"
          :modelValue="form.phone"
          v-mask="'+998#########'"
          required
      ></FormInput>

      <div class="form-item form-item--textarea mb-60">
        <label for="add-message" :class="['form-item__label', {'form-item__label--filled' : form.text.length}]">{{ $t('feedbackText4') }}</label>
        <textarea id="add-message" class="form-item__input" v-model="form.text" maxlength="1200"></textarea>
        <div class="textarea-count-length" v-if="$i18n.locale === 'rus'">{{ $t('feedbackText5') }} {{ 1200 - form.text.length }} {{ $t('feedbackText6') }}</div>
        <div class="textarea-count-length" v-else>{{ 1200 - form.text.length }} {{ $t('feedbackText5') }}  {{ $t('feedbackText6') }}</div>
      </div>

      <div class="files-upload-wrap mb-50">
        <p class="files-upload-text">{{ $t('feedbackText7') }}</p>
        <FormUploadFiles
            :inputFileName='fileUploadName'
            :count="fileUploadCount"
            :changeEvent="fileUploadEventName"
            class="mb-30"
        ></FormUploadFiles>
        <p class="files-upload-text font-weight-300">{{ $t('feedbackText8') }}</p>
      </div>

      <button type="submit" class="g-btn g-btn--full-width">{{ $t('feedbackText9') }}</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fileUploadEventName: 'fileUpload',
      fileUploadName: 'file_',
      fileUploadCount: 5,

      form: {
        name: "",
        email: "",
        phone: "",
        text: "",
      },
    }
  },
  computed: {},

  methods: {
    submit() {
      const formData = new FormData();

      for (let key in this.form) {
        if (this.form[key] === undefined)
          this.form[key] = "";

        formData.append(key, this.form[key]);
      }

      this.$axios.$post('/ru/api/feedback/', formData)
          .then((response) => {
            this.$message({
              title: this.$t('feedbackText10')
            }, true);
          })
          .catch(error => {
            console.error(error);
            if (error.response) {
              if (error.response.data.detail) {
                this.$message({title: error.response.data.detail});
              } else {
                this.$message(this.$getStatusError(error.response.status));
              }
            } else {
              let errorThrow = (error.message.includes('timeout')) ?
                  this.$getStatusError('timeout') :
                  this.$getStatusError('noConnect');

              this.$message(errorThrow);
            }
            console.error(error.message);
          });
    },
  },


  created() {
    this.$nuxt.$on(this.fileUploadEventName, (e) => {
      this.$fileUpload(e);

      for (let i = 1; i <= this.fileUploadCount; i++) {

        if (e.name === this.fileUploadName + i) {
          let files = e.files[0];
          this.$set(this.form, this.fileUploadName + i, files);
        } else {
          this.$set(this.form, this.fileUploadName + i, undefined);
        }
      }

      console.log(this.form);
    });
  },

  destroyed() {
    this.$nuxt.$off(this.fileUploadEventName);
  }
}
</script>

<style lang="scss">
</style>
