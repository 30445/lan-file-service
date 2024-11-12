<template>
  <div class="file-show-content">
    <tool-bar />

    <div class="file-content">
      <file-list :file-list="[]"/>
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

const useShowFileList = showFileListStore()

const getFileList = async () => {
  const {data} = await execute()
  useShowFileList.setFileList(`${props.base}`, data)

  console.log('file list', useShowFileList.getFileList(`${props.base}`))
}
getFileList()



</script>

<style scoped lang="scss">
.file-show-content {

}
</style>
