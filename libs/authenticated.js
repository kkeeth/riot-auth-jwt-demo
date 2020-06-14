import Cookie from 'js-cookie'

const authenticated = (router) => {
  if (!Cookie.get('auth')) {
    return router.push('/login')
  }
}
export default authenticated