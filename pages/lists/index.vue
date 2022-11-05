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
          <FormInput
              id="filter-search"
              :label="$t('memberList4')"
              v-model="filterSearch"
              :modelValue="filterSearch"
          ></FormInput>
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
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberList9')"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
        </template>
      </MembersTablesFilter>

      <MembersTablesAmature :data="members.results" v-if="members.results && members.results.length"></MembersTablesAmature>
    </div>

    <v-pagination
        v-model="page"
        :length="Math.floor(members.count / 20)"
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
      loading: false,

      filterSearch: '',
      filterSex: '',
      filterDistrict: '',
      filterRegion: '',
    }
  },

  async fetch() {
    await this.$store.dispatch('members/fetch', {add: 'all'});
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
      });

      await this.$router.push(this.localePath(url));

      this.loading = false;
    }
  },
  computed: {
    regions() {
      return this.$store.getters['regions/getData'];
    },

    members() {
      return this.$store.getters['members/getData'];
    },
  },
  watch: {
    filterSex(e) {
      console.log(e);
    }
  },

  mounted() {
    if (this.$route.query?.page) {
      console.log(this.$route.query?.page);
      this.page = +this.$route.query.page;
    }
  }
}
</script>
