<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const modules = [Navigation, Pagination, Scrollbar, A11y];

// const onSwiper = (swiper) => {
//   console.log(swiper);
// };

// const onSlideChange = () => {
//   console.log('slide change');
// };

// : scrollbar = "{ draggable: true }"

// @swiper="onSwiper" @slideChange="onSlideChange
</script>

<template>

  <swiper :modules="modules" :slides-per-view="2" :space-between="50" navigation>
    <swiper-slide class="p-5">
      <div
        class="bg-[#0B1224] h-80 w-60 rounded-xl transition duration-600 ease-in-out hover:shadow-[0_0_10px_5px_rgba(168,85,247,0.6)]">
        <img src="&/home/banner.jpg" alt="Imagem Filme" class="rounded-2xl ">
        <div class="p-3">
          <p><strong>Título do filme</strong></p>
          <ul class="flex justify-between mt-2 mb-3">
            <li class="flex items-center text-[#94A3B8]">
              <i class="fa-regular fa-calendar"></i>
              <p>2000</p>
            </li>
            <li class="flex items-center text-[#FACC15]">
              <i class="fa-solid fa-star"></i>
              <p>8.8</p>
            </li>
          </ul>
          <ul class="flex justify-around mt-1">
            <li class="bg-[#94A3B850] px-3 py-2 rounded-xl hover:bg-[#94A3B880] transition duration-300 ease-in-out">
              <button></button>Aventura
            </li>
            <li class="bg-[#94A3B850] px-3 py-2 rounded-xl hover:bg-[#94A3B880] transition duration-300 ease-in-out">
              <button></button>Fantasia
            </li>
          </ul>
        </div>
      </div>
    </swiper-slide>
  </swiper>

</template>

<style scoped></style>
