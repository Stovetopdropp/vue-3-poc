import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
            path: '/',
            name: 'HomepageContainer',
            component: defineAsyncComponent(() => import(
                /* webpackChunkName: "homepage" */
                '~routes/homepage/components/HomepageContainer.vue')),
            meta: {}
        }
    ]
});
