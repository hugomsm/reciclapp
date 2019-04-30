<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <br>
    <div class="text-h5 text-center">Loja de Produtos Recicláveis</div>
    <br>
    <q-select
      @input="filter(currentTag)"
      v-model="currentTag"
      outlined
      :options="options"
      label="Categoria"
    />
    <br>
    <item-loja
      v-for="produto in filteredItems"
      :key="produto.id"
      :imagem="produto.imagem"
      :titulo="produto.titulo"
      :produto="produto.produto"
    ></item-loja>
  </q-page>
</template>

<script>
import ItemLoja from "../components/itemLoja.vue";

export default {
  data() {
    return {
      currentTag: "Todos",
      options: [
        "Todos",
        "Camisetas",
        "Ecobags",
        "Sapatos",
        "Tecidos",
        "Azulejos",
        "Telhas",
        "Fibras"
      ],
      items: [
        {
          id: 1,
          imagem:
            "https://d26lpennugtm8s.cloudfront.net/stores/164/351/products/recicle_use_camiseta_estonada_caveira-quadriculada_ecologica_11-7241fc959988ecbee915523133967281-1024-1024.jpg",
          titulo: "RecicleUse",
          tags: ["Todos", "Camisetas"],
          produto:
            "https://www.recicleuse.com.br/masculino/temas/variados/camiseta-estonada-caveira-geometrica/"
        },
        {
          id: 2,
          imagem:
            "https://camisetafeitadepet.com.br/imagens/banco_imagem_livros/214_imagem_site.jpg",
          titulo: "Camisa feita de PET",
          tags: ["Todos", "Camisetas"],
          produto: "https://camisetafeitadepet.com.br/produtos.php"
        },
        {
          id: 3,
          imagem: "http://fujiro.com.br/img/produtos/sos_mata.jpg",
          titulo: "Fujiro",
          tags: ["Todos", "Camisetas"],
          produto: "http://fujiro.com.br/produtos/"
        },
        {
          id: 4,
          imagem: "http://econtexto.com/images/8col_4.jpg",
          titulo: "Econtexto",
          tags: ["Todos", "Camisetas"],
          produto: "http://econtexto.com/produtos.html"
        },
        {
          id: 5,
          imagem: "https://files.ezoop.com.br/loja1216/produtos/P00036EZ4T.jpg",
          titulo: "Tiê Moda",
          tags: ["Todos", "Camisetas"],
          produto: "https://www.tieloja.com.br/CT-AWESOME-LARANJA-GG-LAR/136/p"
        },
        {
          id: 6,
          imagem: "http://etruria.com.br/img/cache/1500x1000_Nebrasca.jpg",
          titulo: "Etruria",
          tags: ["Todos", "Cobertores"],
          produto: "http://etruria.com.br/produto/nebraska"
        },
        {
          id: 7,
          imagem:
            "https://camisetafeitadepet.com.br/imagens/banco_imagem_livros/198_imagem_site.jpg",
          titulo: "Camiseta feita de PET",
          tags: ["Todos", "Ecobags"],
          produto: "https://camisetafeitadepet.com.br/produtos.php"
        },
        {
          id: 8,
          imagem:
            "http://rivesti.com.br/imagens/produtos/placas-maiores/03-roxo-araca.jpg",
          titulo: "Rivesti",
          tags: ["Todos", "Azulejos"],
          produto: "http://rivesti.com.br/produtos/"
        },
        {
          id: 9,
          imagem:
            "https://www.disteltelhas.com.br/wp-content/uploads/2018/03/telha-pet-injetado-americana-2.jpg",
          titulo: "Distel",
          tags: ["Todos", "Telhas"],
          produto:
            "https://www.disteltelhas.com.br/telha-pet/telha-de-pet-injetado-americana"
        },
        {
          id: 10,
          imagem:
            "https://a0.vnda.com.br/1100x/insectashoes/2019/04/12/19012974-lunacao-oxford-13524.jpg?1555093956",
          titulo: "Insecta Shoes",
          tags: ["Todos", "Sapatos"],
          produto: "https://www.insectashoes.com/produto/lunacao-oxford-3060"
        },
        {
          id: 11,
          imagem:
            "https://futon-company.com.br/wp-content/uploads/product_images/tecido-tecido-reciclado-01.jpg",
          titulo: "Futon Company",
          tags: ["Todos", "Tecidos"],
          produto:
            "https://futon-company.com.br/produtos/tecidos/tecido-reciclado/"
        },
        {
          id: 12,
          imagem:
            "https://3y07jrpuhza3lkxo426nw281-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/133.png",
          titulo: "Trisoft",
          tags: ["Todos", "Fibras"],
          produto: "https://www.trisoft.com.br/portfolio/fibra-comfort-co/"
        }
      ]
    };
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.items.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },

  methods: {
    filter: function(tag) {
      this.currentTag = tag;
    }
  },

  components: {
    itemLoja: ItemLoja
  }
  // name: 'PageName',
};
</script>

<style>
</style>
