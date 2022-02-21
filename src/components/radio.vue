<template>
  <div class="v-radio">
    <label>
      <input
        ref="radio"
        type="radio"
        v-bind="$attrs"
        :checked="selected === value"
        :value="value"
        @input="updateInput"
      />
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "component-radio",
  // over write default names of model
  // prop: value, emit: input
  model: {
    prop: "selected",
    event: "radio",
  },
  props: {
    label: String,
    value: String,
    selected: String,
  },
  watch: {
    selected() {
      console.log(`selected: ${this.selected}`);
    },
    value() {
      console.log(`value: ${this.value}`);
    },
  },
  methods: {
    updateInput() {
      if (!this.$refs.radio) return;
      console.log(`radio updateInput: ${(this.$refs.radio as any).value}`);
      this.$emit("radio", (this.$refs.radio as any).value);
    },
  },
});
</script>

<style scoped lang="scss">
.v-radio {
  label {
    font-size: 1em;
  }
}
</style>
