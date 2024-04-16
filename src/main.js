import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//primevue config
import PrimeVue from 'primevue/config';

//themes
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css';

//icons
import 'primeicons/primeicons.css'

//primeflex
import 'primeflex/primeflex.css'

//primevue components
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';
import Toast from 'primevue/toast';
import Card from 'primevue/card';

const app=createApp(App)
//Add configuration to app

app.use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar', Sidebar)
    .component('pv-toast', Toast)
    .component('pv-card', Card);

app.mount('#app')

