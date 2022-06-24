<script>
import { template, templateSettings } from 'lodash'
// for replace curly brace syntax
templateSettings.interpolate = /{{([\s\S]+?)}}/g

// if have any validation message please add in TEMPLATES_MAP
const TEMPLATES_MAP = {
  minLength: '{{field}} must have a length no less than {{min}}.',
  maxLength: '{{field}} must have a length no more than {{max}}.',
  required: '{{field}} is required',
  isUrl: '{{field}} must be valid URL',
  isEmail: '{{field}} must be valid email',
  isPhone: '{{field}} must be valid phone number',
}
export default {
  props: {
    validator: {
      required: true,
      type: Object,
    },
    field: {
      type: String,
      default: 'This Field',
    },
  },
  computed: {
    errors() {
      if (!this.invalid) {
        return []
      }
      const params = this.validator?.$params || {}
      return Object.keys(params).reduce((errors, validator) => {
        if (!this.validator?.[validator]) {
          const compiled = template(TEMPLATES_MAP?.[validator])
          errors.push(
            compiled({
              ...params?.[validator],
              field: this.field,
            })
          )
        }
        return errors
      }, [])
    },
    invalid() {
      return this.validator?.$dirty && this.validator?.$invalid
    },
  },
  render() {
    return this.$scopedSlots.default({
      errors: this.errors,
      invalid: this.invalid,
    })
  },
}
</script>
