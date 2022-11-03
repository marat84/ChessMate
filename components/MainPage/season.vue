<template>
  <section class="season-section g-container-wide">
    <h2 class="main-section-title mb-16">Сезон 2022</h2>

    <ul class="dlist pl-0 season-info-list">
      <li>
        <section class="season-group-info">
          <h3 class="season-group-info__title">Группы участников</h3>
          <div class="season-group-info__wrap">
            <p class="season-group-info__desc mb-0">Профессионалы</p>
            <ul class="dlist pl-0 member-list">
              <li>
                <div class="member-list__wrap">
                  <strong>70</strong>
                  Мужчины
                </div>
              </li>
              <li>
                <div class="member-list__wrap member-list__wrap--girl-icon">
                  <strong>30</strong>
                  женщин
                </div>
              </li>
            </ul>
            <span class="season-group-info__hr"></span>
            <p class="season-group-info__desc mb-0">Любители</p>
            <ul class="dlist pl-0 member-list">
              <li>
                <div class="member-list__wrap member-list__wrap--gray-icon">
                  <strong>60</strong>
                  Мужчины
                </div>
              </li>
              <li>
                <div class="member-list__wrap member-list__wrap--gray-icon-girl">
                  <strong>40</strong>
                  женщин
                </div>
              </li>
            </ul>
          </div>
        </section>
      </li>
      <li>
        <section class="season-prize-section">
          <span class="season-prize-section__bg"></span>
          <div class="season-prize-section__wrap">
            <h3 class="season-prize-section__title">Призовой фонд</h3>
            <p class="season-prize-section__prize mb-0">
              <span>330 000 000 сум</span>
              <span aria-hidden="true">330 000 000 сум</span>
            </p>
            <span class="season-prize-section__plus">
              <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6.667v18.666M6.667 16h18.666" stroke="#000" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></svg>
              гран-при от спонсоров
            </span>
          </div>
        </section>
      </li>
      <li>
        <FlipCard>
          <template #front>
            <div class="season-front-card">
              <h3 class="season-front-card__title">первый этап турнира</h3>
              <div class="season-front-card__wrap">
                <span class="season-front-info">Онлайн</span>
                <p class="season-front-date mb-0">
                  1-3 ноября
                  <br>
                  отборочный тур
                </p>
              </div>
            </div>
          </template>
          <template #back>
            <div class="season-back-card">
              <span class="season-front-info">Онлайн</span>
              <h3 class="season-front-date mb-0">
                1-3 ноября
                <br>
                отборочный тур
              </h3>
              <p class="season-back-card__text mb-0">
                Проводится на сайте chess.com для мужчин любителей по <a href="https://www.chess.com/club/toshkent-open-erkaklar" target="_blank" rel="nofollow">ссылке</a>, для женщин любителей по <a href="https://www.chess.com/club/toshkent-open-ayollar" target="_blank" rel="nofollow">ссылке</a>.
              </p>
            </div>
          </template>
        </FlipCard>
      </li>
      <li>
        <FlipCard>
          <template #front>
            <div class="season-front-card">
              <h3 class="season-front-card__title season-front-card__title--color">Второй этап турнира</h3>
              <div class="season-front-card__wrap">
                <span class="season-front-info season-front-info--icon">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" fill="#D43C12"/><path d="M12 13a3 3 0 100-6 3 3 0 000 6z" fill="#fff"/></svg>
                  Hilton 10:00
                </span>
                <p class="season-front-date mb-0">
                  6-7 ноября
                  <br>
                  финальный тур
                </p>
              </div>
            </div>
          </template>
          <template #back>
            <div class="season-back-card">
              <span class="season-front-info season-front-info--icon">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" fill="#D43C12"/><path d="M12 13a3 3 0 100-6 3 3 0 000 6z" fill="#fff"/></svg>
                Hilton 10:00
              </span>
              <h3 class="season-front-date mb-0">
                6-7 ноября
                <br>
                финальный тур
              </h3>
              <p class="season-back-card__text mb-0">Этап состоит из 9 туров по швейцарской системе по форме “Рапид” (15+10).</p>
            </div>
          </template>
        </FlipCard>
      </li>
    </ul>
  </section>
</template>
