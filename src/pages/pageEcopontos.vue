<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <div class="text-center">
      <h5 text-color="green">Ecopontos</h5>
      <q-list bordered separator>
        <q-item v-for="ecoponto in ecopontos" :key="ecoponto.id" clickable v-ripple>
          <q-item-section>{{ecoponto.bairro}}</q-item-section>
          <q-item-section>{{ecoponto.end}}</q-item-section>
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
      ecopontos: [
        { bairro: "Vila Mariana", end: "Rua Maurício Francisco Klabin, 148" },
        { bairro: "Morumbi", end: "Rua Irapará, 73" },
        { bairro: "Vila Guilherme", end: "Rua Jose Bernardo Pinto, 1480" },
        { bairro: "Mooca", end: "Avenida Pires do Rio, 600" },
        { bairro: "Tatuapé", end: "Av. Salim farah Maluf, 179" },
        { bairro: "Penha", end: "Rua Doutor Heládio, 104" },
        { bairro: "Brás", end: "Rua Palmorino Mônaco, s/n" },
        { bairro: "Santa Cruz", end: "Rua Santa Cruz, 1452" },
        { bairro: "Jabaquara", end: "Rua Jupatis, 140" },
        { bairro: "Liberdade", end: "Rua Jaceguai, 67" },
        { bairro: "Vila Madalena", end: "Rua Girassol, 15" },
        { bairro: "Itaquera", end: "Rua Manoel Alves da Rocha, 584" },
        { bairro: "Cangaíba", end: "Rua Hugo Wolf, 300" },
        { bairro: "Artur Alvim", end: "Rua Padre Estanislau de Campos, 46" },
        { bairro: "Jardim Antartica", end: "Rua Dom Aquino, 292" }
      ]
    };
  }
};
</script>

<style>
</style>
