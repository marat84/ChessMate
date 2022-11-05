<template>
  <section class="members-section">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">{{ $t('memberList11') }}</h2>
      <p v-html="$t('memberList1')" class="mb-10 mobile-no-br">
      </p>
      <p v-html="$t('memberList2')" class="mb-10 mobile-no-br">
      </p>

      <p v-html="$t('memberList3')" class="mobile-no-br">
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
          <div class="member-select">
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
        </template>

<!--        <template #select-2>
          <div class="member-select">
            <v-autocomplete
                v-model="filterRegion"
                :items="regions"
                item-value="id"
                :item-text="'name'"
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberTable2_1')"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
        </template>-->

        <!--        <template #select-3>
                  <div class="member-select">
                    <v-autocomplete
                        v-model="filterDistrict"
                        :items="[
                            {id: 1, value: '01', name:'Юнусабад'},
                            {id: 2, value: '02', name:'Сергели'}
                        ]"
                        item-value="value"
                        :item-text="'name'"
                        :no-data-text="$t('memberList5')"
                        :placeholder="$t('memberList6')"
                        :label="$t('memberList9')"
                        background-color="transparent"
                        dark
                        height="3.5rem"
                    >
                    </v-autocomplete>
                  </div>
                </template>-->
      </MembersTablesFilter>

      <div class="member-table__list">
        <MembersTablesAmature :data="members.results" v-if="members.results && members.results.length"></MembersTablesAmature>
        <div v-else class="g-container-wide text-center mt-16">{{ $t('noData') }}</div>
      </div>
    </div>

    <v-pagination
        v-if="(members.results && members.results.length) && members.count > 20"
        v-model="page"
        :length="Math.ceil(members.count / 20)"
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
      filterDistrict: '',
      filterRegion: '',
    }
  },

  async fetch() {
    const query = this.$route.query;

    await this.$store.dispatch('members/fetch', {
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
      const url = `/lists/?page=${e}`;
      this.page = e;

      await this.$store.dispatch('members/fetch', {
        add: 'all',
        page: e,
        gender: this.filterSex,
        name: this.filterSearch,
      });

      await this.$router.push(this.localePath(url));

      this.loading = false;
    },
    async search(e) {
      if (this.searchFilled !== this.filterSearch) {
        this.searchFilled = this.filterSearch;
        this.page = 1;
        await this.$router.push(this.localePath(`/lists`));

        await this.$store.dispatch('members/fetch', {add: 'all', name: this.filterSearch, gender: this.filterSex});
      }
    },
    async searchReset() {
      this.searchFilled = false;
      this.filterSearch = '';
      this.page = 1;
      await this.$router.push(this.localePath(`/lists`));

      await this.$store.dispatch('members/fetch', {add: 'all', name: this.filterSearch, gender: this.filterSex});
    }
  },
  computed: {
    regions() {
      return this.$store.getters['regions/getData'];
    },

    members() {
      return this.$store.getters['members/getData'];
    },

    query() {
      return this.$route.query;
    }
  },
  watch: {
    async filterSex(e) {
      this.page = 1;
      await this.$router.push(this.localePath(`/lists`));

      await this.$store.dispatch('members/fetch', {add: 'all', gender: e, name: this.filterSearch});
    },
    async filterRegion(e) {
      this.page = 1;
      await this.$router.push(this.localePath(`/lists`));

      await this.$store.dispatch('members/fetch', {add: 'all', gender: e});
    },

    filterSearch(e) {
      console.log(e);
    }
  },

  mounted() {
    if (this.$route.query?.page) {
      this.page = +this.$route.query.page;
    }
  }
}
</script>
