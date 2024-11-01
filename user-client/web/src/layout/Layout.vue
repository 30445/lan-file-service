<template>
  <div class="layout">
    <layout-header />

    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue";


</script>

<style scoped lang="scss">
.layout {

}
</style>
