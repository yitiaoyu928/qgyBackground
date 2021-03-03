import {createRouter, createWebHashHistory} from "vue-router";
import home from "@/components/home/home";
import Article from "@/components/article/article.vue";
import userList from "@/components/userList/userlist.vue";
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
  }

];
let router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;