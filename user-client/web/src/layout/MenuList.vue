<template>
  <div class="menu-list">
    <div
        class="menu-item"
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
  .menu-item {

    &.active {
      color: var(--colorPrimary);
      cursor: pointer;
    }
  }
}
</style>
