<template>
  <div class="select-view">
    <img alt="select logo" src="@/assets/select.png" width="auto" height="66" />
    <h1>Radio with Vue v-model in child component</h1>
    <label> select and option </label>
    <VSelect v-model="selected" :option-list="optionList" />
    <hr />
    <div>select option = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VSelect from "@/components/select.vue";

export default Vue.extend({
  name: "view-select",
  components: { VSelect },
  data: () => ({
    selected: "",
    optionList: [
      {
        label: "-",
        value: 0,
      },
      {
        label: "option 1",
        value: 1,
      },
      {
        label: "option 2",
        value: 2,
      },
    ],
  }),
  watch: {
    optionList: {
      handler() {
        console.log(`-- optionList watch --`);
        console.log(this.optionList);
      },
      deep: true,
    },
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
