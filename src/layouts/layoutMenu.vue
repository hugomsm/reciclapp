<template>
  <q-layout view="hHh Lpr fFf">
    <div class="corpo">
      <q-header elevated>
        <q-toolbar style="max-height:70px;" class="bg-white">
          <q-toolbar-title class="text-center">
            <h1 class="reciclapp">RECICLAPP</h1>
          </q-toolbar-title>
          <q-btn
            flat
            class="text-secondary"
            style="position: absolute; right: 8px;"
            @click="drawer = !drawer"
            round
            icon="menu"
          />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" :width="200" :breakpoint="400" show-if-above>
        <q-scroll-area
          style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
        >
          <q-list padding>
            <q-item to="/home/pageInfo" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home"/>
              </q-item-section>

              <q-item-section>Início</q-item-section>
            </q-item>

            <q-item to="/home/pageCooperativas" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section>Cooperativas</q-item-section>
            </q-item>

            <q-item to="/home/pageEcopontos" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="card_travel"/>
              </q-item-section>

              <q-item-section>Ecopontos</q-item-section>
            </q-item>

            <q-item to="/home/pageCalculadora" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dialpad"/>
              </q-item-section>

              <q-item-section>Calculadora</q-item-section>
            </q-item>

            <q-item to="/home/pageLoja" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="shopping_cart"/>
              </q-item-section>

              <q-item-section>Centro de Compras</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar-framework.org/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar-framework.org/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Nome do usuário</div>
          </div>
        </q-img>
      </q-drawer>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <q-footer padding>
        <q-tabs v-model="tab" class="bg-teal text-white shadow-2">
          <q-route-tab to="/home/pageInfo" exact name="info" icon="info_outline"/>
          <q-route-tab to="/home/pageMapa" exact name="mapa" icon="location_on"/>
          <q-route-tab to="/home/pageNovo" exact name="new" icon="add"/>
        </q-tabs>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data() {
    return {
      drawer: false,
      tab: "mapa"
    };
  }
};
</script>

<style>
.corpo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
}

.reciclapp {
  text-transform: uppercase;
  background: linear-gradient(to right, #1cb33b 0%, #0081ed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: bold;
}
</style>
