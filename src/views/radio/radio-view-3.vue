<template>
  <div class="radio-view">
    <img
      alt="checkbox logo"
      src="@/assets/radio.jpg"
      width="auto"
      height="66"
    />
    <h1>Radio with pure HTML5 syntax</h1>
    <label>
      <input type="radio" name="group1" value="radio1" />
      radio 1
    </label>

    <label>
      <input type="radio" name="group1" value="radio2" />
      radio 2
    </label>

    <label>
      <input type="radio" name="group1" value="radio3" />
      radio 3
    </label>
    <hr />
    <div>radio selected = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "view-radio",
  data: () => ({
    selected: "",
  }),
  mounted() {
    const group1: NodeListOf<HTMLInputElement> | undefined =
      document.querySelectorAll("input[name=group1]");
    if (!group1) return;
    group1.forEach((radio) => {
      radio.addEventListener("change", (e: Event) => {
        if (!e.target) return;
        this.selected = (e.target as HTMLInputElement).value;
      });
    });
  },
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
