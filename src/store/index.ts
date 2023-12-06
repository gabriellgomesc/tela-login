import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";
import IUsuario from "@/interfaces/IUsuario";
import { BUSCAR_USUARIOS, CADASTRAR_USUARIO } from "@/store/tipo-acoes";
import clienteHttp from "@/http";

interface Estado {
  usuarios: IUsuario[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    usuarios: [],
  },
  actions: {
    async [BUSCAR_USUARIOS](): Promise<IUsuario[] | null> {
      try {
        const resposta = await clienteHttp.get("/usuarios");
        // const resposta = await clienteHttp.get("/v1/blog/articles");
        console.log(resposta.data[0]);
        const usuarios: IUsuario[] = resposta.data;
        return usuarios;
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw error;
      }
    },
    [CADASTRAR_USUARIO](contexto, usuario: IUsuario) {
      console.log(usuario);
      clienteHttp
        .post("/usuarios", usuario)
        // .post("/v1/blog/articles", usuario)
        .then((response) => {
          console.log("Usuário cadastrado com sucesso!", response.data);
        })
        .catch((error) => {
          console.error("Erro ao cadastrar usuário: ", error);
          throw error;
        });
    },
  },
});
