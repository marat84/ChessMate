<template>
  <div class="g-container-wide">
    <table class="member-table">
      <thead>
      <tr>
        <th class="width-10">№</th>
        <th class="width-10">ID</th>
        <th>{{ $t('memberTable1') }}</th>
        <th>{{ $t('memberTable2') }}</th>
        <th>{{ $t('memberTable3') }}</th>
        <th>{{ $t('memberTable4') }}</th>
        <th>{{ $t('memberTable5') }}</th>
      </tr>
      </thead>
      <tr v-for="(item, index) in data" :key="item.id">
        <td data-th="№" class="width-10">
          <span>{{ ((page >= 2) ? (page * 10) + ++index : ++index) }}</span>
        </td>
        <td data-th="ID" class="width-10">
          <span>{{ item['participant_id'] }}</span>            <!--ID-->
        </td>
        <td :data-th="$t('memberTable1')">
          <span>{{ item['full_name'] }}</span>  <!--name-->
        </td>
        <td :data-th="$t('memberTable2')">
          <span>{{ item['region'] }}</span>     <!--region-->
        </td>
        <td :data-th="$t('memberTable3')">
          <span>{{ item['district'] }}</span>               <!--district-->
        </td>
        <td :data-th="$t('memberTable4')">
          <span>{{ item['gender'] }}</span>                  <!--sex-->
        </td>
        <td :data-th="$t('memberTable5')">
          <span>{{ $prettyDate2(item['registration_date']) }}</span>        <!--date-->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },

  computed: {
    page() {
      return this.$route.query.page;
    }
  },

  mounted() {
    console.log(this.data);
  }
}
</script>
