import { helpers } from 'vuelidate/lib/validators'

const isUrl = helpers.regex(
  'isUrl',
  /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/
)
const isEmail = helpers.regex('isEmail', /.+@.+\..+/)
const isPhone = helpers.regex('isPhone', /^(0|08|62)(\d{3,4}-?){2}\d{2,4}$/)
const bypassValidation = () => true

export { isUrl, isEmail, isPhone, bypassValidation }
