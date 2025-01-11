import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "@/views/Dashboard.vue";
import Habits from "@/views/Habits.vue";
import DailyPlan from "@/views/DailyPlan.vue";

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
            path: '/dailyplan',
            name: 'daily plan',
            component: DailyPlan
        }
    ]
})

export default router
