<template>
  <div class="habits-wrapper">
    <AddButton text="Add Habit" @click="addHabit"/>

    <div class="habits-list-items">
      <div v-for="(habit, index) in habits" :key="index" class="habits-list-item">
        <div class="habits-list-item-title">
          <div>
            <font-awesome-icon
                v-if="habit.isEditing"
                class="save-title"
                icon="fa-solid fa-floppy-disk"
                @click="saveHabitValue(index)"
            />
            <font-awesome-icon
                v-else
                class="edit-title"
                icon="fa-solid fa-pencil"
                @click="renameHabit(index)"
            />
            <input
                ref="habitInput"
                class="habits-list-item-text"
                type="text"
                v-model="habit.text"
                :readonly="!habit.isEditing"
                @blur="saveHabitValue(index)"
            />
          </div>
          <font-awesome-icon class="delete-title" icon="fa-solid fa-xmark" @click="removeHabit(index)"/>
        </div>
        <VueDatePicker class="habit-date-picker" v-model="habit.date"></VueDatePicker>
      </div>
    </div>

    <EmptyScreen
        v-if="!habits.length"
        class="empty-screen"
        icon="empty-screen-habits"
        text="You don't have any habits that you want to track yet.
        Add your first one by clicking the button above."
    />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick} from "vue";
import AddButton from "@/components/buttons/AddButton.vue";
import EmptyScreen from "@/components/EmptyScreen.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// Реактивный массив для хранения списка привычек
const habits = ref<{ text: string, isEditing: boolean, date: string | null }[]>([]),
    habitInput = ref<HTMLInputElement[]>([]);

onMounted(() => {
  habits.value = getHabitsList(); // Восстанавливаем данные из localStorage
});

// Функция для добавления новой привычки
const addHabit = () => {
  habits.value.push({text: "Habit", isEditing: false, date: null});
  setHabitsList(habits.value);
};

// Функция для переименования новой привычки
const renameHabit = async (index: number) => {
  habits.value[index].isEditing = true;

  // Устанавливаем фокус на поле ввода
  await nextTick();
  const targetInput = habitInput.value[index];
  if (targetInput) targetInput.focus();
};

// Функция для сохранения изменений
const saveHabitValue = (index: number) => {
  const habit = habits.value[index];
  if (habit) {
    habit.isEditing = false;

    // Сохраняем обновленный список в localStorage
    setHabitsList(habits.value);
  }
};

// Функция для удаления новой привычки
const removeHabit = (index: number) => {
  habits.value.splice(index, 1);

  setHabitsList(habits.value);
};

// Функция для добавления привычек в localStorage
const setHabitsList = (habits: Array<{ text: string; isEditing: boolean; date: string | null}>) => {
  localStorage.setItem('habitsList', JSON.stringify(habits));
};

// Функция для удаления привычек из localStorage
const getHabitsList = (): Array<{ text: string; isEditing: boolean; date: string | null}> => {
  const habitsList = localStorage.getItem('habitsList');
  return habitsList ? JSON.parse(habitsList) : [];
};
</script>
<style scoped>
.habits-list-items {
  width: 100%;
}

.habits-list-item {
  margin-left: 20px;
  margin-bottom: 10px;
  background: var(--color-background-habit-item);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  opacity: 80%;
  padding: 10px;
  width: 1000px;
  border: 2px solid var(--color-item-border-blue);
  border-radius: 10px;
  box-shadow: 0px 5px 12px 0px rgba(212, 211, 211, 0.137);
}

.habits-list-item-title {
  margin: 10px 0 10px 10px;
  display: flex;
  justify-content: space-between;
}

.habits-list-item-text {
  border: none;
  pointer-events: none;
  background: inherit;
  color: var(--color-text-main-blue);
  font-weight: 700;
  font-size: 16px;
  margin-left: 5px;
  outline: none;
}

.edit-title,
.save-title {
  cursor: pointer;
}

.delete-title {
  color: var(--color-dark-red);
  font-size: 16px;
  line-height: 16px;
  margin-right: 10px;
  cursor: pointer;
}

.edit-title:hover,
.save-title:hover,
.delete-title:hover {
  opacity: 80%;
}
</style>