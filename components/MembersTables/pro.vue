<template>
  <div class="g-container-wide">
    <table class="member-table">
      <tr>
        <th class="width-10">№</th>
        <th class="width-10">{{ $t('memberTable9') }}</th>
        <th>{{ $t('memberTable1') }}</th>
        <th>{{ $t('memberTable6') }}</th>
        <th>{{ $t('memberTable7') }}</th>
        <th>{{ $t('memberTable4') }}</th>
        <th>{{ $t('memberTable8') }}</th>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td :data-th="$t('memberTable9')" class="width-10">14203987</td>
        <td :data-th="$t('memberTable1')">Yakubboev Nodirbek</td>
        <td :data-th="$t('memberTable6')">Grandmaster</td>
        <td :data-th="$t('memberTable7')">UZB</td>
        <td :data-th="$t('memberTable4')">Мужчина</td>
        <td :data-th="$t('memberTable8')">2667</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {}
</script>
