<template>
  <v-app>
    <MainLayout>
      <FormComponent />
      <TableComponent />
    </MainLayout>

    <notifications group="packages" position="bottom right" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import MainLayout from "@/layouts/MainLayout.vue";

import FormComponent from "@/components/Form/index.vue";
import TableComponent from "@/components/Table/index.vue";

export default Vue.extend({
  name: "App",

  components: {
    MainLayout,
    FormComponent,
    TableComponent,
  },
});
</script>
