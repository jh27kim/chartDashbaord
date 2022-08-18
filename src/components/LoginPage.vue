<template>
  <div>
    <div class="login-page">
      <transition name="fade">
        <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div
              v-if="!registerActive"
              class="card login"
              v-bind:class="{ error: emptyFields }"
            >
              <h1>Sign In</h1>
              <form class="form-group" @submit.prevent="doLogin">
                <input
                  v-model.trim="emailLogin"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
                <input
                  v-model.trim="passwordLogin"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />

                <input type="submit" class="btn btn-primary"/>
                <p>
                  Don't have an account?
                  <a
                    href="#"
                    @click="
                      (registerActive = !registerActive), (emptyFields = false)
                    "
                    >Sign up here</a
                  >
                </p>
                <p><a href="#">Forgot your password?</a></p>
              </form>
            </div>

            <div
              v-else
              class="card register"
              v-bind:class="{ error: emptyFields }"
            >
              <h1>Sign Up</h1>
              <form class="form-group">
                <input
                  v-model="emailReg"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
                <input
                  v-model="passwordReg"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <input
                  v-model="confirmReg"
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  required
                />
                <input
                  type="submit"
                  class="btn btn-primary"
                  @click="doRegister"
                />
                <p>
                  Already have an account?
                  <a
                    href="#"
                    @click="
                      (registerActive = !registerActive), (emptyFields = false)
                    "
                    >Sign in here</a
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import axios from '../axios/axios'

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      registerActive: false,
      emailLogin: '',
      passwordLogin: '',
      emailReg: '',
      passwordReg: '',
      confirmReg: '',
      emptyFields: false,
    };
  },
  computed: {
   //  ...mapGetters(['getAccessToken', 'getUserEmail', 'getUserName', 'getRole']),
  },

  methods: {
    doLogin() {
      const params = new URLSearchParams();
      params.append('email', this.emailLogin);
      params.append('password', this.passwordLogin);
      // 여기에 저장해놨다가.

      axios
        .post('http://localhost:8081/web/login/', params)
        .then((response) => {
          console.log(response);
          if (response.data.errorCode === "LOGIN_ERROR"){
            console.log(response.data)
            alert(response.data.errorMessage)
            return
          }
          window.localStorage.setItem("Access-Token", `${response.data['auth-token']}`);
          store.commit("setAuth", true);
          console.log(store.state.isAuthenticated); //true 바뀜

          this.$router.push('/');   
          // LOGIN 성공시   this.$router.push('redirectURL'); 
        })
        .catch((error) => {
          // alert("null");
          console.log(error);
        });
    },

    doRegister() {
      const params = new URLSearchParams();
      params.append('email', this.emailReg);
      params.append('password', this.passwordReg);

      axios
        .post('http://localhost:8081/web/register/', params)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
