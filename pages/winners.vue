<template>
  <section class="winners-section">
    <div class="inner-image-wrap mb-50">
      <img class="inner-image" src="/images/prize-bg.jpg" alt="Фон" width="3840" height="1120" role="presentation" aria-hidden="true">
      <h2 class="inner-title mt-0">Победители</h2>
      <p class="inner-light-text">ПРИЗОВОЙ ФОНД</p>
      <strong class="prize-color prize-text-big">330 000 000 сум</strong>
    </div>

    <div class="g-container winners-desc-wrap mb-70">
      <p>
        Победители турнира определяются по количеству набранных ими баллов,
        <br>
        в случае ничьи учитываются следующие дополнительные показатели:
      </p>

      <ul class="dlist pl-0 winner-notice-list">
        <li>встреча между собой (если все участники играли между собой),</li>
        <li>коэффициент Бухгольца,</li>
        <li>средний коэффициент Бухгольца,</li>
        <li>рейтинг перформанс,</li>
        <li>количество побед</li>
      </ul>
      <p>
        Победители и призёры турнира будут награждены призом хокима Ташкента,
        <br>
        дипломами, медалями, а также, денежными премиями.
      </p>
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
          <WinnersList :data="item.list"></WinnersList>
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
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 2,
              name: 'Пулатов Мавлонбек мухторжон угли loremмухторжон угли lorem',
              status: 'Профессионал',
              prize: '1 000 000 сум',
            },
            {
              id: 3,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 4,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 5,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 6,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 7,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 8,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 9,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },
            {
              id: 10,
              name: 'Пулатов Мавлонбек мухторжон угли',
              status: 'Профессионал',
              prize: '50 000 000 сум',
            },

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
