<template>
  <div class="tool-bar">
    <div class="top-bar"></div>

    <show-path/>

    <tool-row />
  </div>
</template>

<script setup lang="ts">
import ShowPath from "./ShowPath.vue";
import ToolRow from "./ToolRow.vue";

</script>

<style scoped lang="scss">
.tool-bar {
  padding: 10px;
}
</style>
