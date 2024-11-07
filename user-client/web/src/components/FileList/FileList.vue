<template>
  <div class="file-list">
    <file-list-item v-for="(file, index) in fileList" :key="index" :file="file"></file-list-item>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fileList: FileList
}>()

</script>

<style scoped lang="scss">
.file-list {

}
</style>
