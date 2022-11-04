<template>
  <section class="season-section g-container-wide">
    <h2 class="main-section-title mb-16">{{ $t('season1') }}</h2>

    <ul class="dlist pl-0 season-info-list">
      <li>
        <section class="season-group-info">
          <h3 class="season-group-info__title">{{ $t('season2') }}</h3>
          <div class="season-group-info__wrap">
            <p class="season-group-info__desc mb-0">{{ $t('season3') }}</p>
            <ul class="dlist pl-0 member-list">
              <li>
                <div class="member-list__wrap" v-html="$t('season4')">
                </div>
              </li>
              <li>
                <div class="member-list__wrap member-list__wrap--girl-icon" v-html="$t('season5')">
                </div>
              </li>
            </ul>
            <span class="season-group-info__hr"></span>
            <p class="season-group-info__desc mb-0">{{ $t('season9_1') }}</p>
            <ul class="dlist pl-0 member-list">
              <li>
                <div class="member-list__wrap member-list__wrap--gray-icon" v-html="$t('season6')">
                </div>
              </li>
              <li>
                <div class="member-list__wrap member-list__wrap--gray-icon-girl" v-html="$t('season7')">
                </div>
              </li>
            </ul>
          </div>
        </section>
      </li>
      <li>
        <section class="season-prize-section">
          <span class="season-prize-section__bg"></span>
          <div class="season-prize-section__wrap">
            <h3 class="season-prize-section__title">{{ $t('season8') }}</h3>
            <p class="season-prize-section__prize mb-0">
              <span>{{ $t('season9') }}</span>
              <span aria-hidden="true">{{ $t('season9') }}</span>
            </p>
            <span class="season-prize-section__plus">
              <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6.667v18.666M6.667 16h18.666" stroke="#000" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg>
              {{ $t('season10') }}
            </span>
          </div>
        </section>
      </li>
      <li>
        <FlipCard>
          <template #front>
            <div class="season-front-card">
              <h3 class="season-front-card__title">{{ $t('season11') }}</h3>
              <div class="season-front-card__wrap">
                <span class="season-front-info">{{ $t('season12') }}</span>
                <p class="season-front-date mb-0" v-html="$t('season13')">
                </p>
              </div>
            </div>
          </template>
          <template #back>
            <div class="season-back-card">
              <span class="season-front-info">{{ $t('season12') }}</span>
              <h3 class="season-front-date mb-0" v-html="$t('season13')">
              </h3>
              <p class="season-back-card__text mb-0" v-html="$t('season14')">
              </p>
            </div>
          </template>
        </FlipCard>
      </li>
      <li>
        <FlipCard>
          <template #front>
            <div class="season-front-card">
              <h3 class="season-front-card__title season-front-card__title--color">{{ $t('season15') }}</h3>
              <div class="season-front-card__wrap">
                <span class="season-front-info season-front-info--icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" fill="#D43C12"/><path d="M12 13a3 3 0 100-6 3 3 0 000 6z" fill="#fff"/></svg>
                  {{ $t('season16') }}
                </span>
                <p class="season-front-date mb-0" v-html="$t('season17')">
                </p>
              </div>
            </div>
          </template>
          <template #back>
            <div class="season-back-card">
              <span class="season-front-info season-front-info--icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" fill="#D43C12"/><path d="M12 13a3 3 0 100-6 3 3 0 000 6z" fill="#fff"/></svg>
                {{ $t('season16') }}
              </span>
              <h3 class="season-front-date mb-0" v-html="$t('season17')">
              </h3>
              <p class="season-back-card__text mb-0">{{ $t('season18') }}</p>
            </div>
          </template>
        </FlipCard>
      </li>
    </ul>
  </section>
</template>
