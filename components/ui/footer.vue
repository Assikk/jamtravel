<template>
  <footer>
    <div class="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-4 justify-between">
      <div class="w-[158px] flex flex-col gap-2">
        <svg width="158" height="40" fill="white">
          <use xlink:href="#logo_yellow"></use>
        </svg>
        <p class="text-[10px] font-semibold">
          Молись, Люби, Путешествуй!
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <p v-for="page in pages" :key="page.id" class="uppercase cursor-pointer transition ease-linaer hover:text-white">
          {{page.name}}
        </p>
      </div>
      <img src="@/assets/img/digital.png" alt="">
      </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      pages: [
        {
          id: 1,
          name: 'О компании'
        },
        {
          id: 2,
          name: 'Блог'
        },
        {
          id: 3,
          name: 'Галерея'
        },
        {
          id: 4,
          name: 'Вакансии'
        },
        {
          id: 5,
          name: 'Контакты'
        },
      ]
    }
  }
}
</script>
<style scoped>
footer {
  background: radial-gradient(85.71% 85.71% at 50% 90.78%, #111717 0%, #000 100%), var(--primary, #EBE600);
  padding: 120px 3px;
  color: #EBE600;
}
</style>
