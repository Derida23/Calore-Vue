// import menus from '@/menu'
const auth = ({ app, route, redirect, store }) => {
  console.log(!!app.$cookiz.get('calore-token'))
}

export default auth
