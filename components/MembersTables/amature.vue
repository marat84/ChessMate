<template>
  <div class="g-container-wide">
    <table class="member-table">
      <tr>
        <th class="width-10">№</th>
        <th class="width-10">ID</th>
        <th>{{ $t('memberTable1') }}</th>
        <th>{{ $t('memberTable2') }}</th>
        <th>{{ $t('memberTable3') }}</th>
        <th>{{ $t('memberTable4') }}</th>
        <th>{{ $t('memberTable5') }}</th>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td :data-th="$t('memberTable1')">Пулатов Мавлонбек Мухторжон угли</td>
        <td :data-th="$t('memberTable2')">Андижанская обл.</td>
        <td :data-th="$t('memberTable3')">Асакинский</td>
        <td :data-th="$t('memberTable4')">Мужчина</td>
        <td :data-th="$t('memberTable5')">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">1</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
      <tr>
        <td data-th="№" class="width-10">2</td>
        <td data-th="ID" class="width-10">1101169852</td>
        <td data-th="ФИО УЧАСТНИКА">Пулатов Мавлонбек Мухторжон угли</td>
        <td data-th="РЕГИОН">Андижанская обл.</td>
        <td data-th="РАЙОН">Асакинский</td>
        <td data-th="ПОЛ">Мужчина</td>
        <td data-th="РЕГИСТРАЦИЯ">25.10.2022, 19:55</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {}
</script>
