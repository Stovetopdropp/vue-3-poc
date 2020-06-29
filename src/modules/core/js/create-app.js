import { createApp } from 'vue';

import router from '~modules/core/js/router';
import initializeStore from '~modules/core/js/store';

import App from '~modules/core/components/App.vue';

const app = createApp(App);
const store = initializeStore();

window.__store = store;

app
    .use(router)
    .use(store)
app.mount('#app');
