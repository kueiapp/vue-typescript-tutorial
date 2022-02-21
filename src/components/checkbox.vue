<template>
  <div class="v-checkbox">
    <label>
      <input
        ref="checkbox"
        type="checkbox"
        v-bind="$attrs"
        :checked="value"
        @input="updateInput"
      />
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "component-checkbox",
  props: {
    label: String,
    value: Boolean,
  },
  methods: {
    updateInput() {
      if (!this.$refs.checkbox) return;
      this.$emit("input", (this.$refs.checkbox as any).checked);
    },
  },
});
</script>

<style scoped lang="scss">
.v-checkbox {
  label {
    font-size: 1em;
  }
}
</style>
