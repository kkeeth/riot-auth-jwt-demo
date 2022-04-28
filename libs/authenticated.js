import Cookie from 'js-cookie'

const authenticated = (router) => {
  if (!Cookie.get('auth')) {
    router.push('/login')
  }
}
export default authenticated
