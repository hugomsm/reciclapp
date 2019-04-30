<template>
  <q-page style="display: flex; justify-content: center; align-items: center;">
    <div>
      <q-img :src="imagemLogo"></q-img>
      <br>
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
        <q-input
          ref="user"
          filled
          v-model="user"
          label="E-mail"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'O e-mail não pode estar em branco']"
        />

        <q-input
          ref="password"
          v-model="password"
          filled
          label="Senha"
          :rules="[
       val => val && val.length > 0 || 'A senha não pode estar em branco'
        ]"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div>
          <q-btn label="Enviar" type="submit" color="secondary"/>
          <q-btn label="Limpar" type="reset" color="secondary" class="q-ml-sm"/>
        </div>
      </form>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      isPwd: true,
      imagemLogo: require("../assets/reciclapp.jpg")
    };
  },
  methods: {
    onSubmit() {
      this.$refs.user.validate();
      this.$refs.password.validate();

      if (this.$refs.user.hasError || this.$refs.password.hasError) {
        this.formHasError = true;
      } else {
        this.$router.push("/home/pageMapa");
      }
    },

    onReset() {
      this.user = null;
      this.password = null;

      this.$refs.user.resetValidation();
      this.$refs.password.resetValidation();
    }
  },

  computed: {
    isUserEmpty() {
      return this.user.length < 1;
    },
    isPassEmpty() {
      return this.password.length < 1;
    }
  },
  name: "PageIndex"
};
</script>
