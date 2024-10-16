import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from "@/views/Dashboard.vue";
import AddHabit from "@/views/AddHabit.vue";
import Habits from "@/views/Habits.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/habits',
            name: 'habits',
            component: Habits,
            // component: () => import('../views/Habits.vue')
        },
        {
            path: '/addhabit',
            name: 'add habit',
            component: AddHabit
        }
    ]
})

export default router
