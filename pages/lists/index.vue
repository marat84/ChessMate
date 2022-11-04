<template>
  <section class="mt-16">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">регистрация</h2>
      <p class="mb-10">
        Все желающие могут принять участие на соревновании,
        <br>
        путём регистрации через
        <a class="underline-link" href="https://t.me/uzshaxmatbot" target="_blank">@uzshaxmatbot</a>
        с 24 по 31 октября 2022 года.
        <br>
      </p>
      <p class="mb-10">
        Желающие шахматисты из зарубежных стран могут участвовать
        <br>
        в профессиональных мужских группах FIDE GM, IM, FM и профессиональных женских
        <br>
        шахматных группах FIDE WGM, WIM, WFM.
      </p>

      <p>
        Во второй этап, по рекомендации
        <br>
        «Шахматного клуба глухих», будут включены 15 парашахматистов с ограниченными
        <br>
        возможностями и с инвалидностью, с высоким рейтингом ФИДЕ
        <br>
        из Республики Каракалпакстан, областей республики и города Ташкента.
        <br>
        В случае превышения норм количества участников в профессиональной
        <br>
        мужской и женской группах, определенных данным Положением,
        <br>
        будут отобраны шахматисты с высоким рейтингом.
      </p>
    </div>

    <div ref="scrollHere">
      <MembersTablesFilter>
        <template #search>
          <FormInput
              id="filter-search"
              label="Введите ID или ФИО участника"
              v-model="filterSearch"
              :modelValue="filterSearch"
          ></FormInput>
        </template>

<!--        <template #select-1>
          <div class="member-select">
            <v-autocomplete
                v-model="filterSex"
                :items="[
                  {id: 1, value: 'male', name:'Мужчина'},
                  {id: 2, value: 'female', name:'Женщина'}
                ]"
                item-value="value"
                :item-text="'name'"
                no-data-text="Нет данных"
                placeholder="Для поиска начните писать"
                label="Пол участника"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
        </template>

        <template #select-2>
          <div class="member-select">
            <v-autocomplete
                v-model="filterRegion"
                :items="[
                    {id: 1, value: 'UZB', name:'UZB'},
                    {id: 2, value: 'USA', name:'USA'}
                ]"
                item-value="value"
                :item-text="'name'"
                no-data-text="Нет данных"
                placeholder="Для поиска начните писать"
                label="Все страны"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
        </template>

        <template #select-3>
          <div class="member-select">
            <v-autocomplete
                v-model="filterDistrict"
                :items="[
                    {id: 1, value: '01', name:'Юнусабад'},
                    {id: 2, value: '02', name:'Сергели'}
                ]"
                item-value="value"
                :item-text="'name'"
                no-data-text="Нет данных"
                placeholder="Для поиска начните писать"
                label="Район"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
        </template>-->
      </MembersTablesFilter>

      <MembersTablesAmature></MembersTablesAmature>
    </div>

    <v-pagination
        v-model="page"
        :length="5"
        :total-visible="6"
        @input="go"
    ></v-pagination>
  </section>
</template>

<script>

export default {
  data() {
    return {
      page: 1,

      filterSearch: '',
      filterSex: '',
      filterDistrict: '',
      filterRegion: '',
    }
  },
  methods: {
    async go(e) {
      console.log(e);
      const url = `/lists?page=${e}`;
      await this.$router.push(this.localePath(url));
      // setTimeout(() => {
      this.$refs.scrollHere.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      // }, 500)
      /*if (e !== this.videoMeta.current_page) {
        this.loading = true;
        const url = `/admin/specialist/?page=${e}`;
        this.page = e;

        await this.$store.dispatch('specialists/fetch', {
          token: this.user.token,
          page: e
        });

        await this.$router.push(this.localePath(url))

        this.loading = false;
      }*/
    }
  },
  watch: {
    filterSex(e) {
      console.log(e);
    }
  }
}
</script>
