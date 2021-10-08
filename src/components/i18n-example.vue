<template>
  <div>
    <h1>{{ t("example.title") }}</h1>
    <div>
      <ValidationProvider
        rules="required"
        name="firstName"
        vid="firstNameValidator"
        v-slot="{ errors }"
        slim
      >
        <input type="text" size="sm" ref="input" v-model="firstName" />
        <div>{{ errors[0] }}</div>
      </ValidationProvider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "@vue/composition-api";
import { useI18n } from "@/utils/vue-i18n-composable";
import { ValidationProvider } from "vee-validate";

export default defineComponent({
  name: "i18nExample",
  components: {
    ValidationProvider,
  },
  setup() {
    const firstName: Ref<string> = ref("");
    return { firstName, ...useI18n() };
  },
});
</script>
