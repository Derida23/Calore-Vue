export default function ({ $axios, $config, route, redirect, app, store }) {
  $axios.onRequest((config) => {
    console.log(config)
  })

  $axios.onResponse((res) => {
    console.log(res)
  })

  $axios.onError((err) => {
    console.log(err)
  })
}
