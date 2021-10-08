<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <I8nExample></I8nExample>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import I8nExample from "@/components/i18n-example.vue";

export default Vue.extend({
  name: "Home",
  components: {
    I8nExample,
  },
});
</script>
