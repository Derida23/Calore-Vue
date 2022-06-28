/**
 *
 * Error Code
 * 200 Succes get api
 * 201 Succes edit api
 * 401 Unauthorized token
 * 404 Data not found
 * 500 Failed retrive api
 * 409 If Data is Exist
 * 422 Error validasi
 *
 */

export default function ({ $axios, $config, route, redirect, app, store }) {
  $axios.onRequest((config) => {
    // console.log('ON REQUEST ->', config)
  })

  $axios.onResponse((res) => {
    // console.log('ON RESPONSE ->', res)
  })

  $axios.onError(() => {
    // console.log('ON ERROR ->', err)
  })
}
