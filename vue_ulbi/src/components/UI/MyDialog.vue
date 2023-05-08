<template>
  <div class="dialog"
       v-if="show"
       @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/components/mixins/toggleMixin";

export default {
  name: 'my-dialog',
 mixins: [toggleMixin, ],
}
</script>

<style lang="scss"
       scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
  }
}
</style>