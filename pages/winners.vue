<template>
  <section class="winners-section">
    <div class="inner-image-wrap mb-50">
      <img class="inner-image" src="/images/prize-bg.jpg" alt="Фон" width="3840" height="1120" role="presentation" aria-hidden="true">
      <h2 class="inner-title mt-0">{{ $t('nav5') }}</h2>
      <p class="inner-light-text">{{ $t('nav4') }}</p>
      <strong class="prize-color prize-text-big">{{ $t('season9') }}</strong>
    </div>

    <div class="g-container winners-desc-wrap mb-70">
      <p v-html="$t('winners1')">
      </p>

      <ul class="dlist pl-0 winner-notice-list">
        <li>{{ $t('winners2') }}</li>
        <li>{{ $t('winners3') }}</li>
        <li>{{ $t('winners4') }}</li>
        <li>{{ $t('winners5') }}</li>
        <li>{{ $t('winners6') }}</li>
      </ul>
      <p v-html="$t('winners7')">
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
          <section v-for="item2 in item.list" :key="item2.id" class="mb-16">
            <h3 class="inner-title-mini text-center">{{ item2.name }}</h3>
            <WinnersList :data="item2.list"></WinnersList>
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
          name: this.$t('winnersText1'), //Профессиональная мужская группа
          list: [
            {
              id: 1,
              name: this.$t('winnersText5'), //мужчины профессионалы
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '50 000 000 ' + this.$t('som'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '30 000 000 ' + this.$t('som'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '20 000 000 ' + this.$t('som'),
                },
                {
                  id: 4,
                  name: this.$t('winnersText17'),
                  prize: '10 000 000 ' + this.$t('som'),
                },
                {
                  id: 5,
                  name: this.$t('winnersText17'),
                  prize: '8 000 000 ' + this.$t('som'),
                },
                {
                  id: 6,
                  name: this.$t('winnersText17'),
                  prize: '6 000 000 ' + this.$t('som'),
                },
                {
                  id: 7,
                  name: this.$t('winnersText17'),
                  prize: '5 000 000 ' + this.$t('som'),
                },
              ]
            },
            {
              id: 1,
              name: this.$t('winnersText9'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '4 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText10')
                },
              ]
            },
            {
              id: 1,
              name: this.$t('winnersText11'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '4 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText15'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '3 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText12'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '2 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText13'),
                },
              ]
            }
          ]
        },
        {
          id: 2,
          name: this.$t('winnersText2'),  //Профессиональная женская группа
          list: [
            {
              id: 1,
              name: this.$t('winnersText6'), //Женщины профессионалы
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '50 000 000 ' + this.$t('som'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '30 000 000 ' + this.$t('som'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '20 000 000 ' + this.$t('som'),
                },
                {
                  id: 4,
                  name: this.$t('winnersText17'),
                  prize: '6 000 000 ' + this.$t('som'),
                },
              ]
            },
            {
              id: 2,
              name: this.$t('winnersText11'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '3 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText12'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '2 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText13'),
                },
              ]
            },
          ]
        },
        {
          id: 3,
          name: this.$t('winnersText3'),  //Любительская мужская группа
          list: [
            {
              id: 1,
              name: this.$t('winnersText7'),  //Любители мужчины
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '10 000 000 ' + this.$t('som'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '8 000 000 ' + this.$t('som'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '5 000 000 ' + this.$t('som'),
                },
              ]
            },
            {
              id: 2,
              name: this.$t('winnersText9'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '10 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText10'),
                },
              ]
            },
            {
              id: 3,
              name: this.$t('winnersText11'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '4 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText15'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '3 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText12'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '2 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText13'),
                },
                {
                  id: 4,
                  name: this.$t('winnersText17'),
                  prize: '1 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText14'),
                },
              ]
            },
            {
              id: 4,
              name: this.$t('winnersText16'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '3 000 000 ' + this.$t('som'),
                },
              ]
            },
          ]
        },
        {
          id: 4,
          name: this.$t('winnersText4'),  //Любительская женская группа
          list: [
            {
              id: 1,
              name: this.$t('winnersText8'),  //Любители женщины
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '10 000 000 ' + this.$t('som'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '8 000 000 ' + this.$t('som'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '5 000 000 ' + this.$t('som'),
                },
              ]
            },
            {
              id: 2,
              name: this.$t('winnersText11'),
              list: [
                {
                  id: 1,
                  name: this.$t('winnersText17'),
                  prize: '4 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText15'),
                },
                {
                  id: 2,
                  name: this.$t('winnersText17'),
                  prize: '3 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText12'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '2 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText13'),
                },
                {
                  id: 3,
                  name: this.$t('winnersText17'),
                  prize: '1 000 000 ' + this.$t('som'),
                  notice: this.$t('winnersText14'),
                },
              ]
            },
          ]
        },
      ]
    }
  }
}
</script>
