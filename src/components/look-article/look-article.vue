<template>
  <teleport to="body">
    <div class="look-article" :style="{height:heights+'px'}"
         :class="{'animate__animated fade animate__fadeInLeft':fadeIn}">
      <i class="iconfont el-icon-close class-close" @click="closeMask"></i>
      <div class="look-article-info" v-html="editHTML"></div>
    </div>
  </teleport>
</template>

<script>
import {onBeforeMount, ref} from "vue";

export default {
  name: "look-article",
  props: ["editHTML", "fadeIn"],
  emits: ["close-edit"],
  setup(props, context) {
    let heights = ref(0);
    const closeMask = () => {
      context.emit("close-edit", false)
    }
    onBeforeMount(() => {
      heights.value = window.outerHeight
    });
    return {
      heights,
      closeMask
    }
  }
}
</script>

<style lang="scss" scoped>
.look-article {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

  .look-article-info {
    text-align: center;
  }

  .class-close {
    position: absolute;
    right: 10px;
    top: 5px;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }
}

</style>