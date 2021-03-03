<template>
  <div class="leave-word">
    <el-table
        :data="formData"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
      >
      </el-table-column>
      <el-table-column
          fixed
          prop="article_id"
          label="文章ID"
      >
      </el-table-column>
      <el-table-column
          prop="user_id"
          label="用户ID"
      >
      </el-table-column>
      <el-table-column
          prop="nick"
          label="用户昵称"
          width="120">
      </el-table-column>
      <el-table-column
          prop="username"
          label="用户账号"
          width="120">
      </el-table-column>
      <el-table-column
          prop="user_leave_time"
          label="留言时间"
          width="150">
      </el-table-column>
      <el-table-column
          prop="user_leave_content"
          label="留言内容"
          width="120">
      </el-table-column>
      <el-table-column
          prop="user_pic"
          label="用户头像"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template #default="scope">
          <el-button @click="dropUser(scope.row)" type="danger" plain size="small">删除</el-button>
          <el-button @click="editUser(scope.row)" type="primary" plain size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import useAxiosRequest from "../hook/useAxiosRequest.js";

export default {
  name: "leaveword",
  setup() {
    let {getAxiosGetRequest, formData} = useAxiosRequest();
    getAxiosGetRequest("selectLeaveWord.php");
    const dropUser = (e) =>{
      console.log(e)
    }
    const editUser = (e)=>{
      console.log(e)
    }
    return {
      formData,
      dropUser,
      editUser
    }
  }
}
</script>

<style lang="scss" scoped>

</style>