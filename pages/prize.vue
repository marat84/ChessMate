<template>
  <section class="winners-section">
    <div class="inner-image-wrap mb-50">
      <img class="inner-image" src="/images/prize-bg.jpg" alt="Фон" width="3840" height="1120" role="presentation" aria-hidden="true">
      <h2 class="inner-title mt-0">tashkent open</h2>
      <p class="inner-light-text">{{ $t('nav4') }}</p>
      <strong class="prize-color prize-color--silver prize-text-big">{{ $t('season9') }}</strong>
    </div>

    <div class="g-container mb-65">
      <v-tabs
          v-model="tab"
          background-color="transparent"
          slider-color="var(--yellow)"
      >
        <v-tab
            v-for="item in sections"
            :key="item.id"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in sections"
          :key="item"
          background-color="transparent"
      >
        <div class="g-container">
          <section class="prize-inner-section" v-for="section in item.list" :key="section.id">
            <h3 class="inner-title-mini mb-50">{{ section.name }}</h3>
            <PrizeList :data="section.list"></PrizeList>
          </section>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,

      sections: [
        {
          id: 1,
          name: 'Профессиональная мужская группа',
          list: [
            {
              id: 1,
              name: 'мужчины профессионалы',
              list: [
                {
                  id: 1,
                  prize: '50 000 000 сум',
                },
                {
                  id: 2,
                  prize: '30 000 000 сум',
                },
                {
                  id: 3,
                  prize: '20 000 000 сум',
                },
                {
                  id: 4,
                  prize: '10 000 000 сум',
                },
                {
                  id: 5,
                  prize: '8 000 000 сум',
                },
                {
                  id: 6,
                  prize: '6 000 000 сум',
                },
                {
                  id: 7,
                  prize: '5 000 000 сум',
                },
              ]
            },
            {
              id: 1,
              name: 'Среди ветеранов',
              list: [
                {
                  id: 1,
                  prize: '4 000 000 сум',
                },
              ]
            },
            {
              id: 1,
              name: 'Среди молодежи',
              list: [
                {
                  id: 1,
                  prize: '4 000 000 сум',
                },
                {
                  id: 2,
                  prize: '3 000 000 сум',
                },
                {
                  id: 3,
                  prize: '2 000 000 сум',
                },
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'Профессиональном женская группа',
        },
        {
          id: 3,
          name: 'Любительская мужская группа',
        },
        {
          id: 4,
          name: 'Любительская женская группа',
        },
      ]
    }
  }
}
</script>
