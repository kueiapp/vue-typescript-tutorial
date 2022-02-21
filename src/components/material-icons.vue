<template>
  <span
    class="material-icons"
    :style="{
      '--size': `${size}px`,
      '--font-size': `${fontSize}px`,
    }"
  >
    {{ name }}
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "component-material-icons",
  props: {
    name: String,
    size: {
      type: Number,
      default: 24,
    },
    fontSize: {
      type: Number,
      default: 24,
    },
  },
});
</script>

<style scoped lang="scss">
.material-icons {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  font-size: var(--font-size);
}
</style>
