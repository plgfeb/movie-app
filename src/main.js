import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHome, faMagnifyingGlass, faStar, faUser, faFilm, faTelevision, faCircleRight, faCircleLeft, faCircleDown, faSignInAlt, faSignOutAlt,  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faHome, faMagnifyingGlass, faStar, faUser, faFilm, faTelevision, faCircleRight, faCircleLeft, faCircleDown, faSignInAlt, faSignOutAlt)


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')