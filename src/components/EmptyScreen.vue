<template>
  <div class="empty-screen">
    <img class="empty-screen_img" :src="imgSrc" alt="empty screen image">
    <p class="empty-screen_text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
  text: string;
}>();

// Используем import.meta.glob для динамической загрузки изображений
const imgUrls = import.meta.glob('../assets/images/*.png', {
  import: 'default',
  eager: true
});

// Создаем динамический путь к изображению
const imgSrc = imgUrls[`../assets/images/${props.icon}.png`];
</script>

<style scoped>
.empty-screen {
  margin: 10% auto;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.empty-screen_text {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}
</style>