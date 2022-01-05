<template>
  <v-form @submit.prevent="getPakagesHandler">
    <v-row class="form__row" align="center">
      <v-text-field v-model="namePackage" label="Введите название пакета" />
      <v-btn :disabled="!namePackage" type="submit" color="primary">
        Искать
      </v-btn>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "FormComponent",
  data: () => ({
    namePackage: "",
  }),
  methods: {
    ...mapActions(["getPackages"]),
    getPakagesHandler() {
      this.getPackages(this.namePackage)
        .then(() => {
          this.$notify({
            group: "packages",
            type: "success",
            title: "Данные успешно загружены",
            text: "Все пакеты по вашему запросу были успешно загружены",
          });
        })
        .catch(() => {
          this.$notify({
            group: "packages",
            type: "error",
            title: "Нам не удалось загрузить данные",
            text: "Извините, по вашему запросу произошла ошибка! Попробуйте зайти позже",
          });
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &__row {
    display: flex;
    gap: 20px;
  }
}
</style>
