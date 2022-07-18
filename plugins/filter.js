import Vue from 'vue'

Vue.filter('or', (value, defaultValue = '-') => {
  return value ?? defaultValue
})

Vue.filter('truncate', (value, length = 50) => {
  return value.length > 5 ? `${value.substring(0, length)}...` : value
})

Vue.filter('money', (value) => {
  const rupiah = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  return `Rp. ${rupiah}`
})

Vue.filter('char', (value, position = 0) => {
  return value.charAt(position)
})
