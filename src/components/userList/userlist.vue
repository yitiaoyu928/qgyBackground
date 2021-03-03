<template>
  <el-table
      :data="formData"
      style="width: 100%"
      border
      class="my-table"
      id="tables"
  >
    <el-table-column
        prop="id"
        label="ID"
        width="120"
        fixed
    >
    </el-table-column>
    <el-table-column
        prop="nick"
        label="昵称"
    >
    </el-table-column>
    <el-table-column
        prop="via"
        label="头像"
    >
    </el-table-column>
    <el-table-column
        prop="signs"
        label="个性签名">
    </el-table-column>
    <el-table-column
        prop="username"
        label="用户账号">
    </el-table-column>
    <el-table-column
        prop="pw"
        label="用户密码">
    </el-table-column>
    <el-table-column
        prop="email"
        label="邮箱">
    </el-table-column>
    <el-table-column
        prop="login_ip"
        label="登录IP">
    </el-table-column>
    <el-table-column
        prop="login_time"
        label="登录时间">
    </el-table-column>
    <el-table-column
        prop="regist_time"
        label="邮箱">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="160"
    >
      <template #default="scope">
        <el-button @click="dropUser(scope.row)" type="danger" size="small">删除</el-button>
        <el-button @click="editClickHandler(scope.row)" type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <edit-user v-if="isShow" :data="formPropsData" @emit-close="close"></edit-user>
</template>

<script>
import usePublic from "../hook/usePublic";
import useAxiosRequest from "../hook/useAxiosRequest";
import {toRefs, onBeforeMount} from "vue";
import EditUser from "./edit-user/edit-user";
export default {
  name: "userlist",
  setup() {
    const usepublic = usePublic();
    let {
      editClickHandler,
      control
    } = usepublic;
    let {isShow, formPropsData} = toRefs(control);
    let {formData, getAxiosGetRequest, getAxiosPostRequest} = useAxiosRequest();
    const dropUser = (v) => {
      let {id} = v;
      let obj = {
        id: id
      }
      getAxiosPostRequest("dropUser.php", obj);
    };
    onBeforeMount(() => {
      getAxiosGetRequest("getUserList.php")
    })

    return {
      dropUser,
      editClickHandler,
      isShow,
      formPropsData,
      formData
    }
  },
  methods: {
    close(val) {
      this.isShow = val;
    }
  },
  components: {
    "edit-user": EditUser
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  position: relative;
}
</style>