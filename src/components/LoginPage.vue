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
              <form class="form-group">
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
                <!-- <input
              class="input-dialog"
              type="text"
              placeholder="이메일"
              v-model.trim="user.email"
            />
            <input
              class="input-dialog"
              type="password"
              placeholder="비밀번호"
              v-model.trim="user.password"
            /> -->
                <input type="submit" class="btn btn-primary" @click="doLogin" />
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

  <!-- <section v-if="!getAccessToken" class="">
        <base-button class="text-xs" @click="showLoginDialog"
          >로그인</base-button
        >
        <base-dialog
          :open="loginDialogIsVisible"
          @close="hideLoginDialog"
          class="flex flex-col justify-items-center z-40"
        >
          <span class="text-2xl font-bold mt-10 mb-4">로그인</span>
          <section class="flex flex-col space-y-4">
            <input
              class="input-dialog"
              type="text"
              placeholder="이메일"
              v-model.trim="user.email"
            />
            <input
              class="input-dialog"
              type="password"
              placeholder="비밀번호"
              v-model.trim="user.password"
            />
          </section>
          <section class="flex space-x-2 mt-6">
            <base-button
              type="submit"
              @click="login"
              mode="primary"
              class="text-sm"
            >
              로그인</base-button
            >
            <base-button class="text-sm" @click="hideLoginDialog"
              >취소</base-button
            >
          </section>
          <section class="font-color-black-300 text-xs mt-3 mb-6">
            <span>아직 회원이 아니신가요?</span>
            <span class="underline text-link cursor-pointer" @click="moveToSignUp">회원가입</span>
          </section>
        </base-dialog>
      </section>
      <section v-else class="flex items-center space-x-6">
        <router-link to="/mypage">
          <img
            class="h-10 w-10 cursor-pointer rounded-full object-cover"
            :src="imgsrc"
            alt="user profile"
          />
        </router-link>
        <base-button class="text-xs" @click="logout">로그아웃</base-button>
      </section> -->
</template>

<script>
import axios from 'axios';

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

      axios
        .post('http://localhost:8081/web/login/', params)
        .then((response) => {
          document.cookie = `Acess-Token=${response.data['auth-token']}`;
          document.cookie = `User-Email=${response.data['user-email']}`;
          window.localStorage.setItem("Acess-Token", `${response.data['auth-token']}`);
          window.localStorage.setItem("User-Email", `${response.data['user-email']}`);
         //  axios.defaults.headers.common['Acess-Token'] = `${response.data['auth-token']}`;
          console.log(response);
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
    login(event) {
      console.log(this.user.email);
      console.log(this.user.password);
      event.preventDefault();
      // LOGIN 액션 실행
      // 서버와 통신(axios)을 해 토큰값을 얻어야 하므로 Actions를 호출.
      this.$store.dispatch('LOGIN', this.user);
      //console.log(this.$store.getters.getAccessToken);
      // this.$emit('loginSuccess');
      this.user.email = '';
      this.user.password = '';
    },
    logout() {
      this.$store.dispatch('LOGOUT');
      axios.defaults.headers.common['auth-token'] = undefined;
      //.then(() => this.$router.replace('/').catch(() => {}));
      console.log(localStorage);
      localStorage.clear;
      console.log(localStorage);
    },
  },
};
</script>
