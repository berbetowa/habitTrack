<template>
  <div class="add-button_wrapper">
    <button class="add-button">
      <font-awesome-icon icon="fa-solid fa-square-plus"/>
      {{text}}
    </button>
  </div>
</template>
<script setup lang="ts">
defineProps(['text'])
</script>
<style scoped>
.add-button_wrapper {
  margin: 20px 0px 20px 20px;
}

.add-button {
  border: none;
  background-color: #f56d60;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px 13px;
  color: #fff;
  box-shadow: 1px 0px 9px 0px #0000004d;
}

.add-button:hover{
  cursor: pointer;
  background-color: #f3786e;
}
</style>