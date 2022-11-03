<template>
  <ul class="dlist pl-0 about-list">
    <li>
      <article class="about-item">
        <div class="about-item__info">
          <h3 class="inner-title-mini">
            Кто жюри
            <br>
            в этом турнире?
          </h3>
          <p class="about-item__text mb-0">Группа экспертов в области цифрового творчества, состоящая из дизайнеров, разработчиков и агентств со всего мира, которые
            продемонстрировали свой талант и опыт в области цифрового дизайна. Их роль состоит в том, чтобы ежедневно оценивать и тщательно оценивать веб-проекты, представляемые на
            рассмотрение.
          </p>
        </div>
        <div class="about-item__img-wrap">
          <img src="/images/about-2.jpg" alt="Фото с турнира" width="686" height="560" loading=lazy>
        </div>
      </article>
    </li>
    <li>
      <article class="about-item">
        <div class="about-item__info">
          <h3 class="inner-title-mini">
            Опыт турнира
            <br>
            шахматных мыслителей
          </h3>
          <p class="about-item__text mb-0">Наши конференции предлагают нашему сообществу возможность лично встретиться, обменяться идеями, учиться и вдохновляться выступлениями и
            семинарами самых дальновидных ораторов в отрасли. События проходят в знаковых городах по всему миру от Сан-Франциско, Нью-Йорка и Лос-Анджелеса до Токио, Парижа,
            Берлина, Амстердама и Лондона.
          </p>
        </div>
        <div class="about-item__img-wrap">
          <img src="/images/about-3.jpg" alt="Фото с турнира" width="686" height="560" loading=lazy>
        </div>
      </article>
    </li>
    <li>
      <article class="about-item">
        <div class="about-item__info">
          <h3 class="inner-title-mini">
            Мы также любим
            <br>
            писать книги
          </h3>
          <p class="about-item__text mb-0">
            Наш редакционный диапазон включает: ежегодную публикацию Hot Right Now:
            A Contemporary Landscape for Digital Thinkers, в которой представлены идеи о текущих сдвигах парадигмы, технологиях и тенденциях, а также коллекцию электронных книг,
            созданных в сотрудничестве с самыми яркими умами в отрасли.
          </p>
        </div>
        <div class="about-item__img-wrap">
          <img src="/images/about-4.jpg" alt="Фото с турнира" width="686" height="560" loading=lazy>
        </div>
      </article>
    </li>
  </ul>
</template>

<style lang="scss">
.about-list {
  display: grid;
  grid-gap: rem(72);

  & > li {
    &:nth-child(even) {
      & .about-item__info {
        order: 2;
        padding-right: 0;
        padding-left: rem(130);
      }
    }
  }
}

.about-item {
  display: flex;
  align-items: center;
}

.about-item__info {
  width: 50%;
  padding-right: rem(130);
}

.about-item__img-wrap {
  width: 50%;

  & img {
    width: 100%;
  }
}
</style>
