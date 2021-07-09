<template>
  <div class="root">
    <el-header>头部测试</el-header>
    <el-container>
      <el-aside width="200px">
        <my-aside></my-aside>
      </el-aside>
      <el-main class="my-main">
        <transition enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
    <el-footer>页脚测试</el-footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped lang="scss">
.root {
  min-width: 960px;

  .my-main {
    min-height: 600px;
  }

}
</style>
