<template>
  <div class="radio-view">
    <img
      alt="checkbox logo"
      src="@/assets/radio.jpg"
      width="auto"
      height="66"
    />
    <h1>Radio with Vue v-model in child component</h1>
    <p>
      v-model is a candy syntax.
      <span>
        It just collects both default <b> value </b>, <b>@input </b> into
        <b> v-model</b>.
      </span>
    </p>
    <VRadio v-model="selected" name="group1" label="radio 1" value="radio1" />
    <VRadio v-model="selected" name="group1" label="radio 2" value="radio2" />
    <VRadio v-model="selected" name="group1" label="radio 3" value="radio3" />
    <hr />
    <div>radio selected = {{ selected }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "view-radio",
  components: {
    VRadio: () => import("@/components/radio.vue"),
  },
  data: () => ({
    selected: "radio1",
  }),
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
