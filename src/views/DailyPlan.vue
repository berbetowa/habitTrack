<template>
  <div class="daily-plan-wrapper">
    <AddButton text="Add Plan"/>
    <EmptyScreen icon="empty-screen-plan"
                 text="You haven't create any daily plans yet.
                 You can add your first one by clicking the button above."/>
  </div>
</template>
<script setup lang="ts">
import AddButton from "@/components/buttons/AddButton.vue";
import EmptyScreen from "@/components/EmptyScreen.vue";
</script>
