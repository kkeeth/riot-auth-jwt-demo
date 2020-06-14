import Cookie from 'js-cookie'

const notAuthenticated = (router) => {
  if (Cookie.get('auth')) {
    return router.push('/')
  }
}
export default notAuthenticated