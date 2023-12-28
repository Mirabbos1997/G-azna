<script setup></script>

<template>
  <main class="directions__details my-4">
    <div class="directions__details__title mb-4">
      <h3 class="f-bold mb-0">Kasb-hunarga o‘qitish markazlarining o‘quv xonalarida o‘qitish qiyin bo‘lgan
        quyidagi kasb yo‘nalishlarida «usta-shogird» an’analari asosida hunar o‘rganmoqchi bo‘lgan yoshlarga
        shogirdlar tayyorlash yoki shogirdlarni ish haqi bilan ta’minlash uchun subsidiya ajratish</h3>
    </div>
    <a-row :gutter="[24,24]">
      <a-col :xs='24' :sm="24" :md="24" :lg="16" :xl="18" :xxl="20">
        <div class="directions__details__content">
          <a-list bordered class="list">
            <template #header>
              <div class="list__header">
                <strong class="text-bold">Ajratiladigan mablag‘:</strong>
                <h1 class="text-bold">1 320.0 ming. so’m miqdorida subsidiya ajratish</h1>
              </div>
            </template>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Imtiyoz haqida</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Vazirlar mahkamasining 2022-yil 11-maydagi “Aholini
                    tadbirkorlikka jalb qilish jamg’armasi mablag’lari hisobidan subsidiyalar ajratish tartibi
                    to’g’risida”gi VMQ-252 qaroriga muvofiq Kasb-hunarga o‘qitish markazlarining o‘quv xonalarida
                    o‘qitish qiyin bo‘lgan quyidagi kasb yo‘nalishlarida «usta-shogird» an’analari asosida hunar
                    o‘rganmoqchi bo‘lgan yoshlarga shogirdlar tayyorlash yoki shogirdlarni ish haqi bilan ta’minlash
                    uchun subsidiya ajratish</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Mas’ul tashkilot</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Kambag’allikni qisqartirish va bandlik vazirligining
                    Aholini tadbirkorlikka jalb qilish jamg’armasi</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Kimlar uchun?</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">Qonunchilik hujjatlariga muvofiq jismoniy shaxslar uchun</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Imtiyozni taqdim etish tartibi va muddatlari</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">Kasb-hunarga o‘qitish markazlarining o‘quv xonalarida o‘qitish qiyin bo‘lgan
                    quyidagi kasb yo‘nalishlarida «usta-shogird» an’analari asosida hunar o‘rganmoqchi bo‘lgan
                    yoshlarga shogirdlar tayyorlash yoki shogirdlarni ish haqi bilan ta’minlash uchun subsidiya
                    ajratish</p>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row :gutter="32" align="middle">
                <a-col :span="4">
                  <h4 class="mb-0">Huquqiy asos</h4>
                </a-col>
                <a-col :span="20">
                  <p class="mb-0">O‘zbekiston Respublikasi Vazirlar mahkamasining 2022-yil 11-maydagi “Kasb-hunarga
                    o‘qitish markazlarining o‘quv xonalarida o‘qitish qiyin bo‘lgan quyidagi kasb yo‘nalishlarida
                    «usta-shogird» an’analari asosida hunar o‘rganmoqchi bo‘lgan yoshlarga shogirdlar tayyorlash yoki
                    shogirdlarni ish haqi bilan ta’minlash uchun subsidiya ajratish tartibi to’g’risida”gi VMQ-252
                    qarori
                    https://lex.uz/uz/docs/-6002834</p>
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
                    Sayt: <a href="https://www.online-mahalla.uz">https://www.online-mahalla.uz</a> <br>
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
