<template>
  <div class="checkbox-view">
    <img alt="checkbox logo" src="@/assets/checkbox.png" width="66" height="66" />
    <h1>Checkbox with v-model in child component</h1>
    <p>
      v-model is a candy syntax.
      <span>
        It just collects both default <b> value </b>,  <b>@input </b> into  <b> v-model</b>.
      </span>
    </p>
    <VCheckbox
      v-for="checkbox in checkboxList"
      :key="checkbox.value"
      v-model="checkbox.status"
      :label="checkbox.label"
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
        label: "あ2",
      },
      {
        status: false,
        value: "a2",
        label: "い2",
      },
      {
        status: false,
        value: "a3",
        label: "う2",
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