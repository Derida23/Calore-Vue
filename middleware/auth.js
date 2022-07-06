// import menus from '@/menu'
const auth = ({ app, route, redirect, store }) => {
  const isLogin = !!app.$cookiz.get('calore-token')
  const urlLogin =
    route.name !== null && route.name.includes('index')
      ? route.name.includes('index')
      : ''

  if (!isLogin) {
    redirect('/')
  } else if (isLogin && urlLogin) {
    redirect('/order')
  }
}

export default auth
