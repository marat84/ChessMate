<template>
  <section class="members-section">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">{{ $t('memberList12') }}</h2>
      <p class="mb-10 mobile-no-br" v-html="$t('memberList14')">
      </p>
      <p class="mb-10 mobile-no-br" v-html="$t('memberList15')">
      </p>
    </div>


    <div ref="scrollHere">
      <MembersTablesFilter>
        <template #search>
          <form class="form-item-wrap filter-wrap__search" @submit.prevent="search">
            <FormInput
                id="filter-search"
                type="search"
                :label="$t('memberList4')"
                v-model="filterSearch"
                :modelValue="filterSearch"
                required
            ></FormInput>

            <button type="submit" class="form-item-in-button" v-if="!searchFilled">
              <span class="visually-hidden">{{ $t('searchButton') }}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button type="button" v-else class="form-item-in-button" @click.prevent="searchReset">
              <span class="visually-hidden">Удалить введённый текст</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--white)" aria-hidden="true" focusable="false">
                <path d="M.94.94a1.5 1.5 0 012.12 0L10 7.878l6.94-6.94a1.5 1.5 0 012.12 2.122L12.122 10l6.94 6.94a1.5 1.5 0 01-2.122 2.12L10 12.122l-6.94 6.94a1.5 1.5 0 01-2.12-2.122L7.878 10 .939 3.06a1.5 1.5 0 010-2.12z"/>
              </svg>
            </button>
          </form>
        </template>

        <template #select-1>
          <div class="member-select" v-if="$vuetify.breakpoint.mdAndUp">
            <v-autocomplete
                v-model="filterSex"
                :items="[
                  {id: 1, value: 'male', name: $t('sex1')},
                  {id: 2, value: 'female', name: $t('sex2')}
                ]"
                item-value="value"
                :item-text="'name'"
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberList7')"
                background-color="transparent"
                clearable
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
          <FormSelect
              v-else
              id="filter-sex"
              :label="$t('memberList7')"
              v-model="filterSex"
              :modelValue="filterSex"
              :options="[
                  {id: 0, value: '', name: $t('sex0')},
                  {id: 1, value: 'male', name: $t('sex1')},
                  {id: 2, value: 'female', name: $t('sex2')}
              ]"
          ></FormSelect>
        </template>

        <template #select-2>
          <div class="member-select" v-if="$vuetify.breakpoint.mdAndUp">
            <v-autocomplete
                v-model="filterRegion"
                :items="country"
                item-value="id"
                :item-text="'name'"
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberList8')"
                background-color="transparent"
                clearable
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
          <FormSelect
              v-else
              id="filter-country"
              :label="$t('memberList8')"
              v-model="filterRegion"
              :modelValue="filterRegion"
              :options="countryMobile"
          ></FormSelect>

          <!--              :options="[{id:0,value:'',name:$t('sex0')},...country]"-->
        </template>

        <!--        <template #select-3>
                  <div class="member-select">
                    <v-autocomplete
                        v-model="filterStatus"
                        :items="degrees"
                        item-value="id"
                        :item-text="'name'"
                        :no-data-text="$t('memberList5')"
                        :placeholder="$t('memberList6')"
                        :label="$t('memberList16')"
                        background-color="transparent"
                        clearable
                        dark
                        height="3.5rem"
                    >
                    </v-autocomplete>
                  </div>
                  &lt;!&ndash;          <FormSelect
                                id="filter-district"
                                label="Статус"
                                v-model="filterStatus"
                                :modelValue="filterStatus"
                                :options="[
                                    {id: 1, value: '02', name:'Grandmaster'},
                                    {id: 2, value: '03', name:'International Master'}
                                ]"
                            ></FormSelect>&ndash;&gt;
                </template>-->
      </MembersTablesFilter>


      <div class="member-table__list">
        <MembersTablesPro :data="membersPro.results" v-if="membersPro.results && membersPro.results.length"></MembersTablesPro>
        <div v-else class="g-container-wide text-center mt-16">{{ $t('noData') }}</div>
      </div>
    </div>
    <v-pagination
        v-if="(membersPro.results && membersPro.results.length) && membersPro.count > 20"
        v-model="page"
        :length="Math.ceil(membersPro.count / 20)"
        :total-visible="($vuetify.breakpoint.lgAndUp) ? 7 : 6"
        @input="go"
    ></v-pagination>
  </section>
</template>

<script>

export default {
  data() {
    return {
      page: 1,
      loading: false,
      searchFilled: false,

      filterSearch: '',
      filterSex: '',
      filterStatus: '',
      filterRegion: '',
    }
  },

  async fetch() {
    const query = this.$route.query;

    await this.$store.dispatch('membersPro/fetch', {
      add: 'all',
      page: query.page,
      gender: this.filterSex,
    });
  },

  methods: {
    async go(e) {
      this.$nuxt.$emit('updateTab', 1);
      this.$refs.scrollHere.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      this.loading = true;
      const url = `/lists/pro/?page=${e}`;
      this.page = e;

      await this.$store.dispatch('membersPro/fetch', {
        page: e,
        gender: this.filterSex,
        name: this.filterSearch,
        country: this.filterRegion,
        degree: this.filterStatus,
      });

      await this.$router.push(this.localePath(url));

      this.loading = false;
    },
    async search(e) {
      if (this.searchFilled !== this.filterSearch) {
        this.searchFilled = this.filterSearch;
        this.page = 1;
        await this.$router.push(this.localePath(`/lists/pro`));

        await this.$store.dispatch('membersPro/fetch', {name: this.filterSearch, gender: this.filterSex, country: this.filterRegion, degree: this.filterStatus});
      }
    },
    async searchReset() {
      this.searchFilled = false;
      this.filterSearch = '';
      this.page = 1;
      await this.$router.push(this.localePath(`/lists/pro`));

      await this.$store.dispatch('membersPro/fetch', {name: this.filterSearch, gender: this.filterSex, country: this.filterRegion, degree: this.filterStatus});
    }
  },
  computed: {
    country() {
      return this.$store.getters['country/getData'];
    },
    countryMobile() {
      const data = this.$store.getters['country/getData'];
      const newData = [
        {
          id: 0,
          value: '',
          name: this.$t('sex0')
        }
      ];

      for (let item of data) {
        newData.push({...item, value: item.id})
      }

      return newData;
    },
    degrees() {
      const data = this.$store.getters['degree/getData'];

      return data.filter(e => e.name !== '');
    },

    membersPro() {
      return this.$store.getters['membersPro/getData'];
    },

    query() {
      return this.$route.query;
    }
  },
  watch: {
    async filterRegion(e) {
      console.log(e);
      this.page = 1;
      await this.$router.push(this.localePath(`/lists/pro`));

      await this.$store.dispatch('membersPro/fetch', {name: this.filterSearch, gender: this.filterSex, country: e, degree: this.filterStatus});
    },
    async filterSex(e) {
      this.page = 1;
      await this.$router.push(this.localePath(`/lists/pro`));

      await this.$store.dispatch('membersPro/fetch', {gender: e, name: this.filterSearch, country: this.filterRegion, degree: this.filterStatus});
    },
    async filterStatus(e) {
      this.page = 1;
      await this.$router.push(this.localePath(`/lists/pro`));

      await this.$store.dispatch('membersPro/fetch', {name: this.filterSearch, gender: this.filterSex, country: this.filterRegion, degree: e});
    },
  },

  mounted() {
    if (this.$route.query?.page) {
      this.page = +this.$route.query.page;
    }
  }
}
</script>
