<template>
  <div class="layout-header align-center">
    <div class="left-menu">
      <menu-list></menu-list>
    </div>
    <div class="right-menu"></div>
  </div>
</template>

<script setup lang="ts">
import MenuList from "./MenuList.vue";
</script>

<style scoped lang="scss">
.layout-header {
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 5px 10px 0 #efefef;
  .left-menu {
    height: 100%;
  }
}
</style>
