import '@riotjs/hot-reload'
import { component, register } from 'riot'
import { Router, Route } from '@riotjs/route'
import App from './app.riot'
import '../libs/store'

// register Router and Route components are globally
register('router', Router)
register('route', Route)

component(App)(document.getElementById('app'), {
  title: 'Hello Riot.js!'
})
