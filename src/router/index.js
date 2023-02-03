import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TopRated from '../views/TopRated.vue'
import Login from '../views/Login.vue'
import Film from '../views/Film.vue'
import Serie from '../views/Serie.vue'
import PaginaInizialeVue from '../views/PaginaIniziale.vue'
import FilmDettagli from '../views/FilmDettagli.vue'
import SerieDettagli from '../views/SerieDettagli.vue'

const routes = [
    { path: '/', name: 'PaginaIniziale', component: PaginaInizialeVue },
    { path: '/home', name: 'Home', component: Home },
    { path: '/toprated', name: 'TopRated', component: TopRated },
    { path: '/login', name: 'Login', component: Login },
    { path: '/film', name: 'Film', component: Film },
    { path: '/serie', name: 'Serie', component: Serie },
    { path: '/film/dettagli/:id', name: 'FilmDettagli', component: FilmDettagli },
    { path: '/serie/dettagli/:id', name: 'SerieDettagli', component: SerieDettagli },
    {
        path: '/protected',
        name: 'protected',
        component: () => import('../views/Protected.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=> import('../views/NotFound.vue')
      }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from)=>{
    if(to.meta.requiresAuth && !window.user){
      return {name: 'login'}
    }
  })

export default router 