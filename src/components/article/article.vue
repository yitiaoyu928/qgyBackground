<template>
  <div class="article">
    <el-table
        :data="formData"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          width="120">
      </el-table-column>
      <el-table-column
          prop="bg_image"
          label="文章封面"
          width="300">
      </el-table-column>
      <el-table-column
          prop="describe"
          label="文章描述"
          width="120">
      </el-table-column>
      <el-table-column
          fixed
          prop="date_time"
          label="发布日期"
          width="150">
      </el-table-column>
      <el-table-column
          prop="title"
          label="文章名称"
          width="120">
      </el-table-column>
      <el-table-column
          prop="classify"
          label="文章分类"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template #default="scope">
          <el-button @click="dropArticle(scope.row)" type="danger" plain size="small">删除</el-button>
          <el-button @click="editClickHandler(scope.row)" type="primary" plain size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <edit-article v-if="isShow" @close="close" :data="formPropsData"></edit-article>
</template>

<script>
import EditArticle from "./edit-article/editArticle";
import usePublic from "../hook/usePublic.js";
import useAxiosRequest from "../hook/useAxiosRequest";
import {toRefs, onBeforeMount} from "vue";

export default {
  name: "my-article",
  setup() {
    let usepublic = usePublic();
    let {
      editClickHandler,
      control
    } = usepublic;
    let {isShow, formPropsData} = toRefs(control);
    let {getAxiosGetRequest,getAxiosPostRequest, formData} = useAxiosRequest();
    onBeforeMount(() => {
      getAxiosGetRequest("getArticleList.php");
    })
    const dropArticle = (v)=>{
      let {id} = v;
      let obj = {
        id:id
      }
      getAxiosPostRequest("dropArticle.php",obj);
    }
    return {
      dropArticle,
      editClickHandler,
      formPropsData,
      isShow,
      formData
    }
  },
  methods: {
    close(val) {
      this.isShow = val;
    }
  },
  components: {
    "edit-article": EditArticle
  }
}
</script>

<style lang="scss" scoped>
.article {
  position: relative;
}
</style>