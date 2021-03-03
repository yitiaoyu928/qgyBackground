import {createApp} from 'vue';
import {
  ElTable,
  ElTableColumn, ElButton,
  ElHeader,
  ElFooter,
  ElContainer,
  ElAside,
  ElMain,
  ElIcon,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElForm,
  ElFormItem,
  ElInput
} from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "../public/animate.css-4.1.1/animate.min.css";
// 自定义组件列表
import myAside from "@/components/my-aside/aside";
import home from "@/components/home/home";
import App from './App.vue';
import router from "./router/index";

const app = createApp(App);
app.component("el-button", ElButton);
app.component("el-header", ElHeader);
app.component("el-footer", ElFooter);
app.component("el-container", ElContainer);
app.component("el-aside", ElAside);
app.component("el-main", ElMain);
app.component("el-icon", ElIcon);
app.component("el-link", ElLink);
app.component("el-menu", ElMenu);
app.component("el-menu-item", ElMenuItem);
app.component("el-table", ElTable);
app.component("el-table-column", ElTableColumn);
app.component("el-form", ElForm);
app.component("el-form-item", ElFormItem);
app.component("el-input",ElInput);
// 自定义组件引用
app.component("my-aside", myAside);
app.component("my-home", home);
// 引入路由
app.use(router);
app.mount('#app');