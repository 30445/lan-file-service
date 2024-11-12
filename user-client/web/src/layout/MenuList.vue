<template>
  <div class="menu-list">
    <div
        class="menu-item flex flex-center"
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
    padding: 10px 0;
    height: 40px;
    &.active {
      color: var(--colorPrimary);
      cursor: pointer;
      background-color: var(--colorPrimaryBg);
    }
  }
}
</style>
