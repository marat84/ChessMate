<template>
  <div class="g-container-wide">
    <table class="member-table">
      <thead>
      <tr>
        <th class="width-10">№</th>
        <th class="width-10">{{ $t('memberTable9') }}</th>
        <th>{{ $t('memberTable1') }}</th>
        <th>{{ $t('memberTable6') }}</th>
        <th>{{ $t('memberTable7') }}</th>
        <th>{{ $t('memberTable4') }}</th>
        <th>{{ $t('memberTable8') }} (01.11.2022)</th>
      </tr>
      </thead>
      <tr v-for="(item, index) in data" :key="item.id">
        <td data-th="№" class="width-10">
          <span>{{ ((page >= 2) ? (page * 10) + ++index : ++index) }}</span>
        </td>
        <td :data-th="$t('memberTable9')" class="width-10">
          <span>{{ item['fide_code'] }}</span>
        </td>
        <td :data-th="$t('memberTable1')">
          <span>{{ item['full_name'] }}</span>
        </td>
        <td :data-th="$t('memberTable6')">
          <span v-if="item['degree']">{{ item['degree'][`name_${$utils.reLang()}`] }}</span>
        </td>
        <td :data-th="$t('memberTable7')">
          <span>{{ item['country'][`name_${$utils.reLang()}`] }}</span>
        </td>
        <td :data-th="$t('memberTable4')">
          <span>{{ (item['gender'] === 'male') ? $t('sex1') : $t('sex2') }}</span>
        </td>
        <td :data-th="$t('memberTable8')">
          <span>{{ item['rating'] }}</span>
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
