<template>
  <div class="radio-view">
    <img
      alt="checkbox logo"
      src="@/assets/radio.jpg"
      width="auto"
      height="66"
    />
    <h1>Radio without v-model in child component</h1>
    <VRadio
      :selected="selected"
      name="group1"
      label="radio 1"
      value="radio1"
      @radio="(value) => (selected = value)"
    />
    <VRadio
      :selected="selected"
      name="group1"
      label="radio 2"
      value="radio2"
      @radio="(value) => (selected = value)"
    />
    <VRadio
      :selected="selected"
      name="group1"
      label="radio 3"
      value="radio3"
      @radio="(value) => (selected = value)"
    />
    <hr />
    <div>radio selected = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "view-radio",
  components: {
    VRadio: () => import("@/components/radio.vue"),
  },
  data: () => ({
    selected: "",
  }),
});
</script>

<style lang="scss" scoped>
.radio-view {
  padding-top: 44px;

  p {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
