<template>
  <div class="menu-list align-center">
    <div
        class="menu-item flex-center"
        v-for="menu in menuList"
        :key="menu.key"
        :class="[{active: active === menu.key}]"
    >{{menu.title}}</div>
  </div>
</template>

<script setup lang="ts">
const menuList = [
  {
    key: "/public",
    title: "公共空间"
  }
]
const active = ref(menuList[0].key)

const route = useRoute()

watch(() => route.path, value => {
  active.value = value
})

</script>

<style scoped lang="scss">
.menu-list {
  height: 100%;
  .menu-item {
    height: 100%;
    padding: 0 15px;
    &.active {
      color: var(--colorPrimary);
      cursor: pointer;
    }
  }
}
</style>
