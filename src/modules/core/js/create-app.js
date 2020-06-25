import { createApp } from 'vue';

import router from '~modules/core/js/router';
import store from '~modules/core/js/store';

import App from '~modules/core/components/App.vue';

const app = createApp(App);

app
    .use(router)
    .use(store)
app.mount('#app');
