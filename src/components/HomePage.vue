<template>
  <div>
    <header>
      <h2>Bem-vindo!</h2>
    </header>
    <main>
      <p>Seja bem-vindo à nossa aplicação.</p>
      <p>
        Quer sair da aplicação?
        <router-link class="link" to="/">Sair</router-link>
      </p>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: "WelcomePage",
};
</script>

<style scoped>
/* Estilos para o cabeçalho */
header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

/* Estilos para o conteúdo principal */
main {
  text-align: center;
  margin-top: 20px;
}

p {
  margin-bottom: 10px;
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
