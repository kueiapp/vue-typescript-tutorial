<template>
  <div class="radio-view">
    <img
      alt="checkbox logo"
      src="@/assets/radio.jpg"
      width="auto"
      height="66"
    />
    <h1>Radio with Vue v-model</h1>
    <p>
      v-model is a candy syntax.
      <span>
        It just collects both default <b> value </b>, <b>@input </b> into
        <b> v-model</b>.
      </span>
    </p>
    <label>
      <input type="radio" v-model="selected" value="radio 1" />
      radio 1
    </label>

    <label>
      <input type="radio" v-model="selected" value="radio 2" />
      radio 2
    </label>

    <label>
      <input type="radio" v-model="selected" value="radio 3" />
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
  components: {
    VRadio: () => import("@/components/radio.vue"),
  },
  data: () => ({
    selected: "",
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
