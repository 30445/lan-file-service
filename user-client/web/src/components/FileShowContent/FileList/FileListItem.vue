<template>
  <div class="file-list-item">{{file}}</div>
</template>

<script setup lang="ts">
defineProps<{
  file: File
}>()
</script>

<style scoped lang="scss">
.file-list-item {

}
</style>
