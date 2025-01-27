import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGrip, faHourglassHalf, faPenToSquare, faPlus, faSquarePlus, faPencil, faXmark, faFloppyDisk} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faGrip, faHourglassHalf, faPenToSquare, faPlus, faSquarePlus, faPencil, faXmark, faFloppyDisk)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
