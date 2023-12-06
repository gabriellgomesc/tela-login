<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <h2>Cadastrar</h2>
  </header>
  <body>
    <form @submit.prevent="cadastrarUsuario" aria-label="Cadastro de usuário">
      <div>
        <label for="email">E-mail:</label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="E-mail"
          required
        />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Senha"
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    <p v-if="message">{{ message }}</p>
    <p>
      Já possui cadastro?
      <router-link class="link" to="/">Faça login</router-link>
    </p>
  </body>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IUsuario from "@/interfaces/IUsuario";
import { useStore } from "vuex";
import { key } from "@/store";
import { BUSCAR_USUARIOS, CADASTRAR_USUARIO } from "@/store/tipo-acoes";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cadastrar",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      // usuarios: [] as IUsuario[],
    };
  },
  setup() {
    const store = useStore(key);
    const usuarios = ref<IUsuario[] | null>(null);

    (async () => {
      try {
        usuarios.value = await store.dispatch(BUSCAR_USUARIOS);
      } catch (error) {
        console.error(`Erro ao buscar usuários: ${error}`);
      }
    })();

    return {
      usuarios,
      store,
    };
  },
  methods: {
    cadastrarUsuario(): void {
      const usuario: IUsuario = {
        email: this.email,
        password: this.password,
      };

      const usuarioExiste = this.usuarios?.find(
        (usr: IUsuario) => usr.email === this.email
      );

      if (usuarioExiste) {
        this.message = "Endereço de e-mail já em uso";
        this.email = "";
        this.password = "";
      } else {
        this.message = "Usuário cadastrado";
        this.store.dispatch(CADASTRAR_USUARIO, usuario);
        this.$router.push("/");
      }
    },
  },
});
</script>

<style scoped>
/* Estilos para o cabeçalho */
header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

/* Estilos para o formulário */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

form div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

/* Estilos para mensagens de erro e link */
p {
  text-align: center;
  margin-top: 15px;
}

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.link:hover {
  color: darkblue;
}
</style>
