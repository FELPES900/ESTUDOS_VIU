<template>
  <h1>Ola a todos</h1>
  <h2>{{saludo}}</h2>
  {{ buttonHtml }}
  <span v-html="buttonHtml"></span> <!-- Pegar a string que foi gerado e faz a inserção no html-->
  <p v-bind:style="color">TESTE</p> <!-- Passando uma variavel para o v-bind:style -->
  <a v-bind:href="website">Google</a> <!-- Passando uma variavel para o v-bind:href n-->
</template>

<script setup lang="ts">
  const saludo = 'Hola a todos'
  const buttonHtml = '<button>Enviar</button>'
  const color = "color: red; background-color: black"
  const website = 'https://google.com/'
</script>