<template>
  <div class="checkbox-view">
    <img alt="checkbox logo" src="@/assets/checkbox.png" width="66" height="66" />
    <h1>Checkbox without v-model in child component</h1>
    <VCheckbox
      v-for="checkbox in checkboxList"
      :key="checkbox.value"
      :value="checkbox.status"
      :label="checkbox.label"
      @input="(status) => (checkbox.status = status)"
    />
    <hr />
    <p>
      <table>
        <thead>
          <tr><th>Status</th><th>Value</th><th>Label</th></tr>
        </thead>
        <tbody>
          <tr v-for="checkbox in checkboxList" :key="checkbox.value">
            <td>{{checkbox.status}}</td>
            <td>{{checkbox.value}}</td>
            <td>{{checkbox.label}}</td>
          </tr>
        </tbody>
      </table>
    </p>
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
    checkboxList: [
      {
        status: false,
        value: "a1",
        label: "あ",
      },
      {
        status: false,
        value: "a2",
        label: "い",
      },
      {
        status: false,
        value: "a3",
        label: "う",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.checkbox-view{
  padding-top: 44px;
  
  p {
    display: flex;
    justify-content: center;
    width: 100%;
  }  
}
</style>