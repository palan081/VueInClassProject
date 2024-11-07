import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import Systems from "./components/systems/Systems.vue";
import MedicalDevices from "./components/medicalDevices/MedicalDevices.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/systems',
            name: 'Systems',
            component: Systems
        },
        {
            path: '/medical-devices',
            name: 'MedicalDevices',
            component: MedicalDevices
        }
    ]
})

export default router