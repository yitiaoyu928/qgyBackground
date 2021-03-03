<template>
  <el-form label-width="80px" class="forms" :model="datas">
    <h3 class="titles">文章修改页面</h3>
    <el-form-item label="文章标题">
      <el-input v-model="datas.title"></el-input>
    </el-form-item>
    <el-form-item label="文章描述">
      <el-input v-model="datas.describe"></el-input>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-input v-model="datas.classify"></el-input>
    </el-form-item>
    <el-form-item label="发布日期">
      <el-input v-model="datas.date_time"></el-input>
    </el-form-item>
    <el-form-item label="文章封面">
      <el-input v-model="datas.bg_image"></el-input>
    </el-form-item>
    <el-button type="primary" plain size="small" icon="el-icon-edit" class="edit-article">修改</el-button>
    <i class="el-icon-close close" @click="$emit('close',false)"></i>
  </el-form>
</template>

<script>
import {toRaw} from "vue";

export default {
  name: "editArticle",
  props: {
    data: {
      type: Object
    }
  },
  setup(props) {
    let datas = toRaw(props.data);
    return {
      datas
    }
  }
}
</script>

<style lang="scss" scoped>

.forms {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 400px;
  background-color: #fff;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  .titles {
    text-align: center;
  }

  .edit-article {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .close {
    position: absolute;
    top: 7px;
    right: 10px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  }
}
</style>