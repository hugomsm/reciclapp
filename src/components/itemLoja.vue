<template>
  <q-card
    color="secondary"
    class="q-ma-md text-center"
    style="max-width:380px;margin:auto;margin-bottom:30px;padding:15px;border:1px solid #f1f1f1;"
  >
    <div class="text-h6">{{tituloProduto}}</div>
    <q-img :src="foto" width="100%" class="responsive"></q-img>
    <br>
    <a style="color: blue;" :href="linkProduto" target="_blank">
      <h5>Link para o produto</h5>
    </a>
  </q-card>
</template>

<script>
export default {
  props: ["imagem", "titulo", "produto"],
  // name: 'ComponentName',
  data() {
    return {
      foto: this.imagem,
      tituloProduto: this.titulo,
      linkProduto: this.produto
    };
  }
};
</script>

<style>
</style>
