import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import routesList from './routes';

const routes: Array<RouteRecordRaw> = routesList;

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
  
// });

export default router;
