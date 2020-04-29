import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/projects'
},{
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/projects/index')
}, {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/dashboard/index'),
    beforeEnter: (to, from, next) => {
        store.dispatch('getWorkingDirectory').then(res => {
            if (res) next();
            else next('/projects');
        });
    },
    children: [
        {
            path: 'materials/:materialsName',
            name: 'materials',
            component: () => import('@/pages/materials'),
            children: [{
                path: 'blocks',
                name: 'blocks',
                component: () => import('@/pages/blocks')
            }, {
                path: 'components',
                name: 'components',
                component: () => import('@/pages/components')
            }]
        }, {
            path: 'setting',
            name: 'setting',
            component: () => import('@/pages/setting')
        },
        {
            path: 'tasks',
            name: 'tasks',
            component: () => import('@/pages/tasks')
        }
    ]
}];

const router = new VueRouter({
    routes
});

export default router;
