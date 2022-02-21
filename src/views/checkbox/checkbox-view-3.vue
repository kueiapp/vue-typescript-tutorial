<template>
  <div class="checkbox-view">
    <img
      alt="checkbox logo"
      src="@/assets/checkbox.png"
      width="66"
      height="66"
    />
    <h1>Checkbox with v-model</h1>
    <p>
      v-model is a candy syntax.
      <span>
        It just collects both default <b>value</b>, <b>@input</b> into
        <b>v-model</b>.
      </span>
    </p>
    <div>
      <label>
        check 1
        <input type="checkbox" v-model="checkboxList" value="1" />
      </label>
      <label>
        check 2
        <input type="checkbox" v-model="checkboxList" value="2" />
      </label>
      <label>
        check 3
        <input type="checkbox" v-model="checkboxList" value="3" />
      </label>
    </div>
    <hr />
    <div>checkboxList = {{ checkboxList }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    VCheckbox: () => import("@/components/checkbox.vue"),
  },
  data: () => ({
    checkboxList: [],
  }),
});
</script>

<style lang="scss" scoped>
.checkbox-view {
  padding-top: 44px;

  p {
    width: 100%;
  }
}
</style>
