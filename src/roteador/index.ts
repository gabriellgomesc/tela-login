import Cadastrar from "@/components/Cadastrar.vue";
import HomePage from "@/components/HomePage.vue";
import Login from "@/components/Login.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    component: Cadastrar,
  },
  {
    path: "/homepage",
    name: "Página inicial",
    component: HomePage,
  },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default roteador;
