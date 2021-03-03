<template>
  <div class="home">
    <div class="editor" ref="editor"></div>
      <look-article :edit-h-t-m-l="x.html"
                    v-if="editShow"
                    @close-edit="closeEdit"
                    fade-in="true"
      ></look-article>
    <el-button type="primary" plain @click="asyncHTML" class="margin-top-distance">查看文章内容</el-button>
  </div>
</template>

<script>
import useHome from "../hook/useHome.js";
import lookArticle from "../look-article/look-article.vue";

export default {
  name: "home",
  components: {
    lookArticle
  },
  setup() {
    let {
      editShow,
      closeEdit,
      editor,
      x,
      asyncHTML
    } = useHome();
    return {
      editShow,
      closeEdit,
      editor,
      x,
      asyncHTML
    };
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 20px;
  z-index: 666;
  .margin-top-distance {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>