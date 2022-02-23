<template>
  <div class="select-view">
    <img alt="select logo" src="@/assets/select.png" width="auto" height="66" />
    <h1>Radio with Vue v-model</h1>
    <label>
      select and option
      <select v-model="selected">
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </select>
    </label>
    <hr />
    <div>select option = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "view-select",
  data: () => ({
    selected: "",
  }),
});
</script>

<style lang="scss" scoped>
.select-view {
  padding-top: 44px;

  p {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
