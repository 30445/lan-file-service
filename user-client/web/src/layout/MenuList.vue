<template>
  <div class="menu-list">
    <div
        class="menu-item"
        v-for="menu in menuList"
        :key="menu.key"
        :class="[{active: active === menu.key}]"
    >{{menu.title}}</div>
    {{themeToken.colorPrimary}}
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

const themeToken = inject("themeToken");

</script>

<style scoped lang="scss">
.menu-list {
  .menu-item {

    &.active {
      //color: ;
    }
  }
}
</style>
