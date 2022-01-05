<template>
  <div v-if="showModal" class="modal-mask">
    <div @click="closeModal" class="modal-wrapper">
      <div @click.stop class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">
            <slot name="header" />
          </h2>
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ModalComponent",

  components: {},

  props: {
    showModal: {
      type: Boolean,
    },
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  watch: {
    showModal() {
      if (this.showModal) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    width: 800px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &-header {
    margin-top: 0;
    color: #0951ec;
  }

  &-body {
    margin: 20px 0;
  }
}

@media all and (max-width: 900px) {
  .modal {
    &-container {
      width: 600px;
    }
  }
}

@media all and (max-width: 768px) {
  .modal {
    &-container {
      width: 400px;
    }
  }
}
@media all and (max-width: 440px) {
  .modal {
    &-container {
      font-size: 12px;
      width: 300px;
    }
  }
}
</style>
