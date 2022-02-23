<template>
  <div class="select-view">
    <img
      alt="checkbox logo"
      src="@/assets/select.png"
      width="auto"
      height="66"
    />
    <h1>Select with pure HTML5 syntax</h1>
    <label>
      select and option
      <select>
        <option value="0">-</option>
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
  mounted() {
    const select: HTMLSelectElement | null = document.querySelector("select");
    if (select === null) return;
    select.addEventListener("change", (e: Event) => {
      if (!e.target) return;
      this.selected = (e.target as HTMLSelectElement).value;
    });
  },
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
