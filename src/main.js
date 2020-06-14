import '@riotjs/hot-reload'
import { component, register, install } from 'riot'
import { Router, Route, router } from '@riotjs/route'
import App from './app.riot'
import '../libs/store'

// register Router and Route components are globally
register('router', Router)
register('route', Route)

install(component => {
  component.router = router
  return component
})

component(App)(document.getElementById('app'), {
  title: 'Hello Riot.js!'
})
