<template>
  <div id="nav" :class="{ closed: isClosed }">
    <button v-if="isClosed" @click="openClicked">
      <MaterialIcons class="close-btn" name="menu" :size="28" />
    </button>
    <button v-else @click="closeClicked">
      <MaterialIcons
        class="close-btn"
        name="close"
        :size="28"
        :font-size="28"
      />
    </button>
    <div v-if="!isClosed" class="content">
      <h1>Checkboxes</h1>
      <router-link to="/checkbox3">checkbox3</router-link> |
      <router-link to="/checkbox1">checkbox1</router-link> |
      <router-link to="/checkbox2">checkbox2</router-link> |
      <router-link to="/checkbox4">checkbox4</router-link>
      <h1>Radio buttons</h1>
      <router-link to="/radio1">radio1</router-link> |
      <router-link to="/radio2">radio2</router-link> |
      <router-link to="/radio3">radio3</router-link> |
      <router-link to="/radio4">radio4</router-link>
      <h1>Select options</h1>
      <router-link to="/select1">select1</router-link> |
      <router-link to="/select2">select2</router-link> |
      <router-link to="/select3">select3</router-link> |
      <router-link to="/select4">select4</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "vue-router";

export default Vue.extend({
  name: "component-nav",
  components: {
    MaterialIcons: () => import("@/components/material-icons.vue"),
  },
  data: () => ({
    isClosed: true,
  }),
  watch: {
    $route: {
      handler() {
        this.isClosed = true;
      },
      deep: true,
    },
  },
  methods: {
    closeClicked() {
      this.isClosed = true;
    },
    openClicked() {
      this.isClosed = false;
    },
  },
});
</script>

<style scoped lang="scss">
#nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 375px;
  padding-top: 6px;
  background-color: #42b983;
  overflow-y: auto;
  @media screen and (max-width: 414px) {
    width: 100vw;
  }

  &.closed {
    width: 44px;
    @media screen and (max-width: 414px) {
      height: 44px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 8px;
    &.router-link-exact-active {
      color: white;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
