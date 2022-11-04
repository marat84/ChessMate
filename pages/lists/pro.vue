<template>
  <section class="mt-16">
    <div class="g-container-wide mb-60">
      <h2 class="visually-hidden">{{ $t('memberList12') }}</h2>
      <p class="mb-10" v-html="$t('memberList14')">
      </p>
      <p class="mb-10" v-html="$t('memberList15')">
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
          <!--          <FormSelect
                        id="filter-country"
                        label="Все страны"
                        v-model="filterRegion"
                        :modelValue="filterRegion"
                        :options="[
                            {id: 1, value: 'male', name:'UZB'},
                            {id: 2, value: 'female', name:'USA'}
                        ]"
                    ></FormSelect>-->
        </template>

        <template #select-3>
          <div class="member-select">
            <v-autocomplete
                v-model="filterStatus"
                :items="[
                  {id: 1, value: '02', name:'Grandmaster'},
                  {id: 2, value: '03', name:'International Master'}
              ]"
                item-value="value"
                :item-text="'name'"
                :no-data-text="$t('memberList5')"
                :placeholder="$t('memberList6')"
                :label="$t('memberList16')"
                background-color="transparent"
                dark
                height="3.5rem"
            >
            </v-autocomplete>
          </div>
          <!--          <FormSelect
                        id="filter-district"
                        label="Статус"
                        v-model="filterStatus"
                        :modelValue="filterStatus"
                        :options="[
                            {id: 1, value: '02', name:'Grandmaster'},
                            {id: 2, value: '03', name:'International Master'}
                        ]"
                    ></FormSelect>-->
        </template>
      </MembersTablesFilter>

      <MembersTablesPro></MembersTablesPro>
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
      filterStatus: '',
      filterRegion: '',
    }
  },
  methods: {
    async go(e) {
      console.log(e);
      const url = `/lists/pro/?page=${e}`;
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
