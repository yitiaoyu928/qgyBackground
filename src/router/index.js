import {createRouter, createWebHashHistory} from "vue-router";
import home from "@/components/home/home";
import Article from "@/components/article/article.vue";
import userList from "@/components/userList/userlist.vue";
import leaveword from "@/components/leaveword/leaveword.vue";
let routes = [
  {
    path: "/",
    component: home
  },
  {
    path:"/article",
    component:Article
  },
  {
    path:"/user",
    component:userList
  },
  {
    path:"/leave",
    component:leaveword
  }

];
let router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;