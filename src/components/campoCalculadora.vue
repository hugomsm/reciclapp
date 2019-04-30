<template>
  <div style="display: grid; grid-template-columns: auto 1fr auto; grid-gap: 10px;">
    <q-btn class="text-bold" @click="subtrair" round color="secondary">
      <big>-</big>
    </q-btn>
    <q-input
      readonly
      type="number"
      outlined
      :value="value"
      @input="$emit('input', $event)"
      :label="texto"
    />
    <q-btn @click="somar" round color="secondary">
      <big>+</big>
    </q-btn>
  </div>
</template>

<script>
export default {
  props: ["value", "texto"],
  data() {
    return {};
  },
  methods: {
    somar() {
      this.$emit("input", this.value + 1);
    },
    subtrair() {
      if (this.value > 0) this.$emit("input", this.value - 1);
    }
  }
};
</script>

<style>
</style>
