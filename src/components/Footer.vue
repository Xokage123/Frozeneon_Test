<template>
  <v-footer class="footer" dark padless>
    <strong class="subheading">
      {{ myInitial }} (<a
        class="footer__link"
        target="_blank"
        :href="myGithubUrl"
        >Github</a
      >)
    </strong>
    <v-avatar width="70" height="70">
      <img :src="myPhoto" :alt="myInitial" />
    </v-avatar>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

import MY_PHOTO from "@/assets/image/my_photo.jpg";

import { MY_INITIAL, GITHUB_URL } from "@/const/index";

export default Vue.extend({
  name: "FooterComponent",
  data() {
    return {
      myInitial: MY_INITIAL,
      myGithubUrl: GITHUB_URL,
      myPhoto: MY_PHOTO,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  &__link {
    color: white;
  }
}
</style>
