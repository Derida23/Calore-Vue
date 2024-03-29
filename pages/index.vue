<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <img src="~/static/calore-black.png" alt="img-login" />
        <h4 class="mb-2">
          Accelerate your business using <b>Calore</b> system
        </h4>
      </div>
      <div class="card-body mt-6">
        <v-form @submit.prevent="handleSave">
          <form-validator
            v-slot="{ errors }"
            :validator="$v.form.email"
            field="email"
          >
            <div class="form-input">
              <div class="title-input">Email</div>
              <v-text-field
                ref="email"
                v-model="form.email"
                name="email"
                outlined
                dense
                type="email"
                placeholder="Enter your email"
                prepend-inner-icon="mdi-at"
                :disabled="loading"
                :error-messages="errors"
              />
            </div>
          </form-validator>

          <form-validator
            v-slot="{ errors }"
            :validator="$v.form.password"
            field="password"
          >
            <div class="form-input">
              <div class="title-input">Password</div>
              <v-text-field
                ref="password"
                v-model="form.password"
                name="password"
                outlined
                dense
                placeholder="Enter your password"
                prepend-inner-icon="mdi-key"
                :type="show ? 'password' : 'text'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :disabled="loading"
                :error-messages="errors"
                @click:append="show = !show"
              />
            </div>
          </form-validator>
          <div class="mt-6 btn-login">
            <v-btn width="100%" type="submit" :disabled="loading">
              SIGN IN
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { useAuthStore } from '@/store/auth'
import FormValidator from '~/components/FormValidator.vue'

export default {
  name: 'IndexPage',
  components: {
    FormValidator,
  },
  setup() {
    const store = useAuthStore()

    return { store }
  },
  data() {
    return {
      show: false,
      form: {
        email: 'admin@calore.com',
        password: 'Beny@1234',
      },
    }
  },
  computed: {
    message() {
      return this.store.message
    },
    loading() {
      return this.store.loading
    },
  },
  watch: {
    message(val) {
      if (val.show_alert) {
        this.$toast.open({
          position: 'top',
          message: val.message_alert,
          type: val.title_alert,
        })
      }
    },
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    async handleSave() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        const response = await this.store.login(this.form)

        if (response) {
          this.$router.push('order')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-image: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350);
  background-size: cover;
  max-width: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 20%);
  padding: 2.5rem 1.5rem;
  text-align: left;
  width: 26rem;

  &-header {
    border-bottom: 1px solid rgba(77, 77, 77, 0.5);
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    text-align: center;

    img {
      width: 50%;
    }

    h4 {
      font-weight: 300;
      margin-top: 0.3rem;

      b {
        font-weight: 500;
        color: #c1392a;
      }
    }
  }
}
</style>
