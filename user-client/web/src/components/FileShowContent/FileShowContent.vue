<template>
  <div class="file-show-content">
    <tool-bar />

    <div class="file-content">
      <file-list :file-list="fileList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolBar from "./ToolBar/ToolBar.vue";
import FileList from "./FileList/FileList.vue"
import {useRequest} from "@/api/request.ts"
import {showFileListStore} from "@/store/showFileList.ts";

const props = defineProps<{
  base: string
}>()

const {execute} = useRequest({
  url: `/file/${props.base}`,
  immediate: false
})

const fileList = ref<FileList>()

const useShowFileList = showFileListStore()

const getFileList = async () => {
  try {
    const {data} = await execute()
    fileList.value = data

  } catch (e) {

  }
}
getFileList()



</script>

<style scoped lang="scss">
.file-show-content {

}
</style>
