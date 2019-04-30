<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <div class="text-center">
      <h5 text-color="green">É catador, cooperativa ou empresa?</h5>
      <h6
        text-color="green"
      >Deseja se cadastrar ou se tornar um membro? Nos envie seu contato para cadastro no aplicativo!</h6>
      <vue-tel-input
        v-model="phone"
        placeholder="Digite seu número de telefone"
        :preferredCountries="['br']"
      ></vue-tel-input>
      <br>
      <q-btn color="secondary" @click="enviarTelefone" class="full-width q-ma-md">Enviar</q-btn>
    </div>
  </q-page>
</template>

<script>
import "vue-tel-input/dist/vue-tel-input.css";

export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    enviarTelefone() {
      this.$q.notify({
        message: "Contato enviado",
        timeout: 3000,
        type: "positive",
        color: "positive",
        textColor: "white",
        icon: "thumb_up",
        position: "center"
      });
    }
  }
};
// name: 'PageName',s
</script>

<style>
</style>
