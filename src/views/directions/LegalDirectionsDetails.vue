<script setup></script>

<template>
  <main class="directions__details my-4">
    <div class="directions__details__title mb-4">
      <h3 class="f-bold mb-0">Uzum va mevali bog‘larda suv chiqarish uchun burg’ulangan quduq o’rnatish uchun subsidiya ajratish</h3>
    </div>
    <a-row :gutter="[24,24]" align="top">
      <a-col :xs='24' :sm="24" :md="24" :lg="16" :xl="18" :xxl="20">
        <div class="directions__details__content">
          <a-list bordered class="list">
            <template #header>
              <div class="list__header">
                <strong class="text-bold">Ajratiladigan mablag‘:</strong>
                <h1 class="text-bold">120 million so‘mdan oshmagan miqdorda</h1>
              </div>
            </template>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Imtiyoz haqida</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Prezidentining 2021 yil 28 iyuldagi “Uzumchilikni rivojlantirishda
                    klaster tizimini joriy etish, sohaga ilg‘or texnologiyalarni jalb qilishni davlat tomonidan
                    qo‘llab-quvvatlashning qo‘shimcha chora-tadbirlari to‘g‘risida”gi PQ-5200 qaroriga muvofiq qishloq
                    xo‘jaligi sohasida uzum va mevali bog‘larda suv tejovchi texnologiyalarni joriy qilishga subsidiya
                    ajratish belgilangan.</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Mas’ul tashkilot</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Qishloq xo‘jaligi vazirligi huzuridagi Qishloq xo‘jaligida xizmatlar
                    ko‘rsatish agentligining Bog‘dorchilik va issiqxona xo‘jaligini rivojlantirish jamg‘armasi</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Kimlar uchun?</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">Qonunchilik hujjatlariga muvofiq ajratilgan yer maydonida uzum va mevali bog‘larda loyiha asosida
                    suv tejovchi texnologiyalarni joriy qilgan qishloq xo‘jaligi mahsulotlari ishlab chiqaruvchisi</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Imtiyozni taqdim etish tartibi va muddatlari</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">Yaratilayotgan har 10 gektar maydondagi uzum va mevali bog‘lar plantatsiyalariga suv chiqarish
                    uchun burg‘ilangan quduq, shuningdek, daryolar, kanallar hamda boshqa suv havzalaridan suvni
                    tortish maqsadida nasos stansiyasini qurishga har bir metri uchun 600 ming so‘mdan, ammo 120
                    million so‘mdan oshmaydigan miqdorda subsidiya ajratish.</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Huquqiy asos</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Vazirlar Mahkamasining 2022 yil 10 iyundagi “Uzumchilik, bog‘dorchilik,
                    issiqxona xo‘jaliklarini yurituvchi va vinochilik mahsulotlarini ishlab chiqaruvchi sub’ektlarni
                    davlat tomonidan moliyaviy qo‘llab-quvvatlash chora-tadbirlari to‘g‘risida”gi 327-son qarori
                    https://lex.uz/uz/docs/6059862</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Aloqa ma’lumotlari</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">
                    Sayt: <a href="https://www.agrosubsidiya.uz/">https://www.agrosubsidiya.uz/</a> <br>
                    Tel: +99891-121-55-05
                  </p>
                </a-col>
              </a-row>
            </a-list-item>
          </a-list>
        </div>
      </a-col>
      <a-col :xs='24' :sm="24" :md="24" :lg="8" :xl="6" :xxl="4">
        <div class="directions__details__btn">
          <router-link to="/login" class="ant-btn bg-primary text-light">Subsidiyadan foydalanish</router-link>
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<style lang="scss">
@import "@/assets/responsive.scss";
.directions__details {
  .directions__details__title {
    h3 {
      font-family: 'Gilroy', sans-serif;
      font-size: 24px;
      line-height: 24px;
    }
  }
  .directions__details__content {
    .ant-row {
      width: 100%;
    }
    .list {
      border: 1px solid #EAECF0;
      border-radius: 10px;
      background: #FFFFFF;
      .list__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px 24px;
        gap: 4px;
        width: 100%;
        height: 81px;
        background: #FFFFFF;
        border: 1px solid #EAECF0;
        border-radius: 10px;
        h1 {
          font-family: 'Gilroy', sans-serif;
          font-size: 28px;
          line-height: 35px;
          margin-bottom: 0;
        }
      }
      .ant-list-item {
        padding: 16px 24px;
      }
    }
  }
  .directions__details__btn {
    width: 100%;
    height: auto;
    padding: 24px 16px;
    border-radius: 10px;
    background: #FFFFFF;
    .ant-btn {
      width: 100%;
    }
  }
}

@include screen('md'){
  .directions__details > .ant-row{
    flex-direction: column-reverse;
  }
}
@include screen('sm'){
  .directions__details > .ant-row{
    flex-direction: column-reverse;
  }
  .directions__details__btn{
    .ant-btn{
      display: block;
    }
  }
}
</style>
