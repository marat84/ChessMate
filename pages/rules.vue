<template>
  <section class="rules-section g-container-wide">
    <div v-html="$t('rulesContent')"></div>
    <a href="/Docs/Nizom.pdf" class="file-download" target="_blank">
      <img src="/images/pdf.svg" alt="иконка скачивания" aria-hidden="true" role="presentation">
      {{ ($i18n.locale === 'rus') ? 'Положение (на узб. яз.).pdf' : 'Nizom.pdf' }}
    </a>
  </section>
</template>
