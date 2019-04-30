<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <div class="text-center">
      <h5 text-color="green">Quem somos</h5>
    </div>
    <q-btn color="secondary" @click="historia" class="full-width q-ma-md" label="Nossa história"/>
    <q-btn color="secondary" @click="desejamos" class="full-width q-ma-md" label="O que desejamos"/>
    <q-btn color="secondary" class="full-width q-ma-md" label="Como ajudar"/>
    <q-btn color="secondary" @click="contate" class="full-width q-ma-md" label="Contate-nos"/>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nossaHistoria:
        "Nossa história começa dentro do curso de Administração da FEI-SP. A ideia central do aplicativo surge diante das dificuldades encontradas no tratamento e destino correto do PET após algumas aulas da matéria de Concepção de Negócio, que possui o propósito de desenvolver um plano de negócio. O Reciclapp é uma plataforma digital com o propósito de integrar empresas, ONGs e catadores. O objetivo do app consiste em um espaço voltado para a negociação e comparação de preços da matéria-prima PET. Oferecemos ainda dicas, pontos de descarte e o diferencial mais importante da plataforma: uma calculadora de consumo anual",
      oQueDesejamos:
        "Desejamos incentivar a negociação da matéria-prima PET como forma de diminuir o descarte inadequado e assim destinar parte deste material para empresas e indústrias que são capazes de reaproveitar este elemento em seu processo produtivo. Dentre as opções de produto, estão as camisetas, os ladrilhos (pisos), os artigos automotivos como carpetes e painéis e até mesmo os artigos industriais e residenciais como canetas, copos e talheres de plástico.",
      contateNos:
        "Para entrar em contato, basta enviar um e-mail para reciclapp@reciclapp.com.br. Ou se preferir, entre em contato através do telefone (11)9999-9999."
    };
  },

  methods: {
    historia() {
      this.$q.dialog({
        title: "Nossa história",
        message: this.nossaHistoria
      });
    },
    desejamos() {
      this.$q.dialog({
        title: "O que desejamos",
        message: this.oQueDesejamos
      });
    },
    contate() {
      this.$q.dialog({
        title: "Contate-nos",
        message: this.contateNos
      });
    }
  }
};
</script>

<style>
</style>
