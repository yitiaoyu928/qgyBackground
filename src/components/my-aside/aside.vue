<template>
  <div class="my-aside">
    <el-menu :router="true">
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <template #title>HOME</template>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-s-order"></i>
        <template #title>文章列表</template>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <template #title>用户列表</template>
      </el-menu-item>
      <el-menu-item index="/leave">
        <i class="el-icon-message"></i>
        <template #title>留言列表</template>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "my-aside"
}
</script>

<style lang="scss" scoped>
.my-aside {

}
</style>