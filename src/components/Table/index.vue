<template>
  <div>
    <LoaderComponent v-if="isLoadPackages" />
    <span v-else-if="packages.length === 0"
      >Нет рузультатов. Введите название пакета, который хотите найти</span
    >
    <v-data-table
      v-else
      :headers="headers"
      :items="packages"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.name`]="{ item }">
        <span @click="showModal(item.name)" class="name">{{ item.name }}</span>
      </template>
      <template v-slot:[`item.keywords`]="{ item }">
        <ul>
          <li :key="keyword" v-for="keyword in item.keywords">{{ keyword }}</li>
        </ul>
      </template>
    </v-data-table>
    <ModalComponent @close="hideModal" :showModal="isVisibleModal">
      <template v-slot:header> {{ getModaleHeader }}</template>
      <template v-slot:body>
        <ul class="modal__list">
          <li :key="index" v-for="(item, index) in packageProperties">
            <span class="item__name">{{ item.name }}: </span>
            <a
              v-if="item.link && item.value"
              :href="item.value"
              target="_blank"
              >{{ item.value }}</a
            >
            <ul v-else-if="Array.isArray(item.value)">
              <li :key="index" v-for="(item, index) in item.value">
                {{ item }}
              </li>
            </ul>
            <span v-else class="item__value">{{ item.value }}</span>
          </li>
        </ul>
      </template>
    </ModalComponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import LoaderComponent from "@/components/Loader/index.vue";
import ModalComponent from "@/components/Modal/index.vue";

import { headerTablePackages } from "./const";

import { getDate } from "@/utils/index";
import { getPackageProperties } from "./utils";

import { NameHeaderTable } from "@/interfaces/interface/table";
import { PackageProperties } from "@/interfaces/interface/packages";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "TableComponent",
  components: {
    LoaderComponent,
    ModalComponent,
  },
  data() {
    return {
      headers: headerTablePackages,
      isVisibleModal: false,
    };
  },
  methods: {
    ...mapMutations(["setModalPackage"]),

    showModal(namePackage: string) {
      this.setModalPackage(namePackage);
      this.isVisibleModal = true;
    },
    hideModal() {
      this.isVisibleModal = false;
    },
  },

  computed: {
    packages() {
      return this.$store.state.packages.map(
        (packageInformation: PackageProperties) => {
          return {
            [NameHeaderTable.NAME]: packageInformation.package.name,
            [NameHeaderTable.VERSION]: packageInformation.package.version,
            [NameHeaderTable.DATE]: getDate(packageInformation.package.date),
            [NameHeaderTable.AUTHOR]:
              packageInformation.package.publisher.username,
            [NameHeaderTable.KEYWORDS]: packageInformation.package.keywords,
          };
        }
      );
    },
    isLoadPackages() {
      return this.$store.state.isLoadPackages;
    },
    getModaleHeader(): string {
      return `Пакет: ${this.$store.state.modalPackage.package.name}`;
    },
    packageProperties() {
      return getPackageProperties(this.$store.state.modalPackage).filter(
        (property) => {
          return property.value;
        }
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.name {
  font-weight: 700;
  cursor: pointer;
  color: rgb(125, 203, 240);
}

.modal {
  &__list {
    list-style: none;
  }
}

.item {
  &__name {
    font-weight: 700;
    font-size: 18px;
  }
}

@media all and (max-width: 768px) {
  .item {
    &__name {
      font-weight: 700;
      font-size: 15px;
    }
  }
}
</style>
