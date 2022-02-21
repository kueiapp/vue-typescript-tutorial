<template>
  <div class="checkbox-view">
    <img
      alt="checkbox logo"
      src="@/assets/checkbox.png"
      width="66"
      height="66"
    />
    <h1>Checkbox with pure HTML5 syntax</h1>
    <label>
      <input type="checkbox" name="group1" value="check1" />
      checkbox 1
    </label>

    <label>
      <input type="checkbox" name="group1" value="check2" />
      checkbox 2
    </label>

    <label>
      <input type="checkbox" name="group1" value="check3" />
      checkbox 3
    </label>
    <hr />
    <div>checkbox selected = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type ComponentData = {
  selected: string[];
};

export default Vue.extend({
  name: "view-checkbox",
  data: (): ComponentData => ({
    selected: [],
  }),
  mounted() {
    const group1: NodeListOf<HTMLInputElement> | undefined =
      document.querySelectorAll("input[name=group1]");
    if (!group1) return;
    group1.forEach((checkbox) => {
      checkbox.addEventListener("change", (e: Event) => {
        if (!e.target) return;
        const targetValue = (e.target as HTMLInputElement).value.toString();
        const checked = (e.target as HTMLInputElement).checked;
        if (!checked) {
          this.selected = this.selected.filter(
            (select) => select !== targetValue
          );
        } else {
          this.selected = [...this.selected, targetValue];
        }
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.checkbox-view {
  padding-top: 44px;

  p {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
