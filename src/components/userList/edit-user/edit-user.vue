<template>
  <teleport to="#tables">
    <div class="edit-user">
      <h3 class="title">用户修改</h3>
      <el-form :model="formData" status-icon label-width="100px" class="my-Form">
        <el-form-item label="ID" prop="id">
          <el-input type="text" v-model="formData.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nick">
          <el-input type="text" v-model="formData.nick" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户账号" prop="username">
          <el-input type="text" v-model="formData.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="pw">
          <el-input type="text" disabled v-model="formData.pw" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="formData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="signs">
          <el-input type="text" v-model="formData.signs" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="via">
          <el-input type="text" v-model="formData.via" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">修改</el-button>
        </el-form-item>
      </el-form>
      <i class="el-icon-close my-close" @click="$emit('emit-close',false)"></i>
    </div>
  </teleport>
</template>

<script>
import {toRaw} from "vue";

export default {
  name: "edit-user",
  props: {
    data: Object
  },
  setup(props) {
    let formData = toRaw(props.data);
    return {
      formData
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-user {
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  .title {
    text-align: center;
  }
  .my-close {
    border: 1px solid #ccc;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    right: 5px;
    cursor: pointer;
  }
}

</style>