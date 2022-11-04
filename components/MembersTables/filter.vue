<template>
  <div class="filter-wrap g-container-wide">
    <div class="form-item-wrap filter-wrap__search">

      <slot name="search"></slot>

      <button type="button" class="form-item-in-button">
        <span class="visually-hidden">Искать</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="filter-wrap__right">
      <slot name="select-1"></slot>
      <slot name="select-2"></slot>
      <slot name="select-3"></slot>
    </div>
  </div>
</template>
