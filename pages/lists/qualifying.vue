<template>
  <section class="mt-16">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">{{ $t('memberList11') }}</h2>
      <p class="mb-10" v-html="$t('memberList13')">

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
                :items="[
                    {id: 1, value: 'UZB', name:'UZB'},
                    {id: 2, value: 'USA', name:'USA'}
                ]"
                item-value="value"
                :item-text="'name'"
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberList8')"
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
      const url = `/lists/qualifying/?page=${e}`;
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
