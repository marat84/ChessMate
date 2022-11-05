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
        <th>{{ $t('memberTable8') }}</th>
      </tr>
      </thead>
      <tr>
        <td data-th="№" class="width-10">
          <span>1</span>
        </td>
        <td :data-th="$t('memberTable9')" class="width-10">
          <span>14203987</span>
        </td>
        <td :data-th="$t('memberTable1')">
          <span>Yakubboev Nodirbek</span>
        </td>
        <td :data-th="$t('memberTable6')">
          <span>Grandmaster</span>
        </td>
        <td :data-th="$t('memberTable7')">
          <span>UZB</span>
        </td>
        <td :data-th="$t('memberTable4')">
          <span>Мужчина</span>
        </td>
        <td :data-th="$t('memberTable8')">
          <span>2667</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {}
</script>
