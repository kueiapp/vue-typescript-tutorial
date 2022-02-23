<template>
  <select v-bind="$attrs" @change="selectChanged">
    <option
      v-for="option in optionList"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type OptionType = {
  value: string | number;
  label: string;
};

export default Vue.extend({
  name: "component-select",
  model: {
    event: "select",
  },
  props: {
    optionList: Array as PropType<OptionType[]>,
  },
  methods: {
    selectChanged(e: Event) {
      if (!e.target) return;
      const value = (e.target as any).value;
      this.$emit("select", value);
    },
  },
});
</script>

<style scoped></style>
