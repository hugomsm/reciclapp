<template>
  <q-page padding ref="container" class="scroll">
    <br>
    <br>
    <br>
    <div ref="calc" class="text-center" style="width:100%; margin-left:auto;margin-right:auto;">
      <h5>Calculadora</h5>

      <campo-calculadora v-model="qtdCopos" texto="Copos"></campo-calculadora>
      <br>
      <campo-calculadora v-model="qtdGarrafa500ml" texto="Garrafas de 500 ml"></campo-calculadora>
      <br>
      <campo-calculadora v-model="qtdGarrafa15l" texto="Garrafas de 1.5 L"></campo-calculadora>
      <br>
      <campo-calculadora v-model="qtdGarrafa2l" texto="Garrafas de 2 L"></campo-calculadora>
      <br>

      <campo-calculadora v-model="qtdGarrafa3l" texto="Garrafas de 3 L"></campo-calculadora>
      <br>
      <q-btn @click="analisar" size="md" color="secondary">Analisar</q-btn>
    </div>

    <div ref="analise" class="text-center" v-if="iniciouAnalise">
      <br>
      <p class="text-h6">Você gastou um total de:</p>
      <p class="text-h5">{{totalKg}}</p>
      <p class="text-h6">KG de plástico!</p>
      <p class="text-h6">Dicas para reduzir o consumo:</p>
      <div v-if="total > 0">
        <p>1. Carregue sacolas retornáveis</p>
      </div>
      <div v-if="total > 0.2">
        <p>2. Adote um carrinho de feira</p>
      </div>
      <div v-if="total > 0.4">
        <p>3. Evite embalagem excessiva de alimentos</p>
      </div>
      <div v-if="total > 0.6">
        <p>4. Compre produtos a granel</p>
      </div>
      <div v-if="total > 0.8">
        <p>5. Use garrafa reutilizável para tomar água</p>
      </div>
      <div v-if="total > 1">
        <p>6. Diga não aos canudos de plástico</p>
      </div>
      <div v-if="total > 1.2">
        <p>7. Tenha uma caneca pessoal</p>
      </div>
      <div v-if="total > 1.4">
        <p>8. Diga não aos talheres descartáveis</p>
      </div>
      <div v-if="total > 1.6">
        <p>9. Evite cosméticos com microplásticos</p>
      </div>
      <div v-if="total > 1.8">
        <p>10. Recicle todos os plásticos que você usar</p>
      </div>
    </div>
    <br>
    <br>
  </q-page>
</template>

<script>
import CampoCalculadora from "../components/campoCalculadora.vue";
import { scroll } from "quasar";
const {
  getScrollTarget,
  getScrollHeight,
  setScrollPosition,
  getScrollPosition
} = scroll;

export default {
  // name: 'PageName',
  data() {
    return {
      pesoCopo: 0.0018,
      pesoGarrafa2l: 0.047,
      pesoGarrafa15l: 0.0335,
      pesoGarrafa500ml: 0.0167,
      pesoGarrafa3l: 0.056,
      qtdCopos: 0,
      qtdGarrafa2l: 0,
      qtdGarrafa15l: 0,
      qtdGarrafa500ml: 0,
      qtdGarrafa3l: 0,
      iniciouAnalise: false,
      total: 0
    };
  },
  computed: {
    totalKg() {
      this.total =
        this.qtdCopos * this.pesoCopo +
        this.qtdGarrafa2l * this.pesoGarrafa2l +
        this.qtdGarrafa15l * this.pesoGarrafa15l +
        this.qtdGarrafa500ml * this.pesoGarrafa500ml +
        this.qtdGarrafa3l * this.pesoGarrafa3l;

      return this.total.toFixed(3).replace(".", ",");
    }
  },

  watch: {
    qtdCopos(val) {
      this.$q.localStorage.set("copos", val);
    },
    qtdGarrafa2l(val) {
      this.$q.localStorage.set("garrafas2l", val);
    },
    qtdGarrafa3l(val) {
      this.$q.localStorage.set("garrafas3l", val);
    },
    qtdGarrafa15l(val) {
      this.$q.localStorage.set("garrafas15l", val);
    },
    qtdGarrafa500ml(val) {
      this.$q.localStorage.set("garrafas500ml", val);
    }
  },
  methods: {
    scrollToElement(el) {
      let target = getScrollTarget(el);
      let offset =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPosition(document.documentElement, offset, 500);
    },

    analisar() {
      if (this.iniciouAnalise == true) {
        this.iniciouAnalise = false;
        let target = this.$refs.calc;
        setScrollPosition(target);
      } else {
        this.iniciouAnalise = true;
        this.$nextTick(() => {
          let target = getScrollTarget(this.$refs.analise);
          this.scrollToElement(target);
        });
      }
    }
  },
  activated() {
    console.log(this.$q.localStorage.getItem("copos"));

    if (this.$q.localStorage.getItem("copos") != undefined) {
      this.qtdCopos = this.$q.localStorage.getItem("copos");
    }

    if (this.$q.localStorage.getItem("garrafas2l") != undefined) {
      this.qtdGarrafa2l = this.$q.localStorage.getItem("garrafas2l");
    }

    if (this.$q.localStorage.getItem("garrafas15l") != undefined) {
      this.qtdGarrafa15l = this.$q.localStorage.getItem("garrafas15l");
    }

    if (this.$q.localStorage.getItem("garrafas500ml") != undefined) {
      this.qtdGarrafa500ml = this.$q.localStorage.getItem("garrafas500ml");
    }

    if (this.$q.localStorage.getItem("garrafas3l") != undefined) {
      this.qtdGarrafa3l = this.$q.localStorage.getItem("garrafas3l");
    }
  },
  components: {
    campoCalculadora: CampoCalculadora
  }
};
</script>

<style>
</style>
