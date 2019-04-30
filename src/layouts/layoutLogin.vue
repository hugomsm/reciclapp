<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL
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
