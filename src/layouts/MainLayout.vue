<template>
  <div class="main-container">
    <v-container>
      <slot />
    </v-container>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import FooterComponent from "@/components/Footer.vue";

export default Vue.extend({
  name: "MainLayout",
  components: {
    FooterComponent,
  },

  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    };
  },
});
</script>
