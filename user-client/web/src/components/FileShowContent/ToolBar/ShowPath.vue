<template>
  <div class="show-path">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in list" :key="index">{{ item.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const list = computed(() => {
  let routerList = route.matched.splice(1).map(item => {
    return {
      path: item.path,
      title: item.meta.title
    }
  })

  return routerList
})



</script>

<style scoped lang="scss">
.show-path {
  margin-bottom: 20px;
  padding: 5px 0;
}
</style>
