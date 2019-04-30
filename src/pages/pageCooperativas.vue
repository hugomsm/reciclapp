<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <div class="text-center">
      <h5 text-color="green">Cooperativas</h5>
      <q-list bordered separator>
        <q-item v-for="cooperativa in cooperativas" :key="cooperativa.id" clickable v-ripple>
          <q-item-section>
            <a style="color: blue;" :href="cooperativa.site" target="_blank">{{cooperativa.nome}}</a>
          </q-item-section>
          <q-item-section>{{cooperativa.end}}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      cooperativas: [
        {
          nome: "Cintitec",
          end: "Armindo Hanine,153-Osasco",
          site: "http://cintitec.com"
        },
        {
          nome: "Recicla Butantã",
          end: "Rua Nella Murari Rosa,40- Butantã",
          site: "http://reciclabutanta.com"
        },
        {
          nome: "Cooperfenix",
          end: "Avenida Prestes Maia,2080- Diadema",
          site: "http://cooperativa-cooperfenix.business.site"
        },
        {
          nome: "Projeto Vira-Lata",
          end: "Rua Nella Murari Rosa,40- Jardim Jaqueline",
          site: "http://viralata.org.br"
        },
        {
          nome: "Coop Cent ABC",
          end: "Rua Caracas,120- Diadema",
          site: "http://coopcentabc.org.br"
        },
        {
          nome: "Cooperativa Crescer",
          end: "Pirituba-São Paulo",
          site: "http://cooperativacrescer.org.br"
        },
        {
          nome: "CooperativaReluz",
          end: "São Bernardo do Campo",
          site: "http://www.coopcentabc.org.br/reluz/"
        }
      ]
    };
  }
};
</script>

<style>
</style>
