<template>
  <section class="mt-16">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">{{ $t('memberList10') }}</h2>
      <p v-html="$t('memberList1')" class="mb-10">
      </p>
      <p v-html="$t('memberList2')" class="mb-10">
      </p>

      <p v-html="$t('memberList3')">
      </p>
    </div>

    <div ref="scrollHere">
      <MembersTablesFilter>
        <template #search>
          <div class="form-item-wrap filter-wrap__search">
            <FormInput
                id="filter-search"
                :label="$t('memberList4')"
                v-model="filterSearch"
                :modelValue="filterSearch"
                :eventSearch="search"
            ></FormInput>

            <button type="button" class="form-item-in-button" @click="search">
              <span class="visually-hidden">{{ $t('searchButton') }}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

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
        </template>

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

      <MembersTablesAmature :data="members.results" v-if="members.results && members.results.length"></MembersTablesAmature>
    </div>

    <v-pagination
        v-if="members.results && members.results.length"
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
  },

  mounted() {
    if (this.$route.query?.page) {
      this.page = +this.$route.query.page;
    }
  }
}
</script>
