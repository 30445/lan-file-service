<template>
  <div class="tool-row">
    <a-button-group>
      <a-tooltip title="下载文件">
        <a-button type="primary">
          <DownloadOutlined />
        </a-button>
      </a-tooltip>
      <a-tooltip title="分享">
        <a-button type="primary">
          <ShareAltOutlined />
        </a-button>
      </a-tooltip>
      <a-tooltip title="上传文件">
        <a-button type="primary">
          <UploadOutlined />
        </a-button>
      </a-tooltip>
    </a-button-group>
  </div>
</template>

<script setup lang="ts">
import {DownloadOutlined, ShareAltOutlined, UploadOutlined} from "@ant-design/icons-vue";

</script>

<style scoped lang="scss">
.tool-row {

}
</style>
