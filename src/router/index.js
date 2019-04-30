import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueTelInput from 'vue-tel-input'


import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueTelInput)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBv8ZAWyVNhfdtFz1kEOgpBcOLCcOPXhYA',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ( /* { store, ssrContext } */ ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({
      y: 0
    }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
