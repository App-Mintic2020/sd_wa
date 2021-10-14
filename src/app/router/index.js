import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue';
import Planilla from './../components/Planilla.vue';
import Equipos from './../components/Equipos.vue';
import PlanillaEquipo from './../components/PlanillaEquipo.vue';
import Informacion from './../components/Informacion.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/planilla',
      name: 'Planilla',
      component: Planilla,
    },
    {
      path: '/equipos',
      name: 'Equipos',
      component: Equipos,
    },
    {
      path: '/equipos-planilla',
      name: 'EquiposPlanilla',
      component: PlanillaEquipo,
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion,
    }
  ]
})
