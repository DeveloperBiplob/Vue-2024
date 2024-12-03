import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../../components/Home.vue'
import AboutView from '../../components/About.vue'
import StudentView from '../../components/Student.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/student',
            name: 'student',
            component: StudentView
        }
    ],
});

export default router;