import { useMainStore } from '~/store'

export default function (context, inject) {
  const store = useMainStore()
  inject('overlay', (val) => {
    store.onOverlay(val)
  })
}
