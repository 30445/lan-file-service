<template>
  <div class="layout-header flex flex-column justify-between">
    <div class="top-menu">
      <menu-list></menu-list>
    </div>
    <div class="bottom-menu"></div>
  </div>
</template>

<script setup lang="ts">
import MenuList from "./MenuList.vue";
</script>

<style scoped lang="scss">
.layout-header {
  width: 85px;
  height: 100vh;
  padding: 5px;
  border-right: 1px solid #efefef;
}
</style>
