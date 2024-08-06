<template>
  <h1>Ola a todos</h1>
  <h2>{{saludo.toUpperCase()}}</h2>
  {{ buttonHtml }}
  <span v-html="buttonHtml"></span> <!-- Pegar a string que foi gerado e faz a inserção no html-->
  <p v-bind:style="color">TESTE</p> <!-- Passando uma variavel para o v-bind:style -->
  <a v-bind:href="website">Google</a> <!-- Passando uma variavel para o v-bind:href n-->
  {{ 2*9 }}
  <h2 v-bind:style="`color :${ahorras >= 200 ? 'green' : 'red'}`">${{ ahorras }}</h2> <!-- maneiras de colocar o CSS dentro do HTML -->
  <h2 v-bind:class="ahorras >= 200 ? 'conFondo' : 'sinFondo'">${{ ahorras }}</h2>
</template>

<script setup lang="ts">
  const saludo = 'Hola a todos'
  const buttonHtml = '<button>Enviar</button>'
  const color = "color: red; background-color: black"
  const website = 'https://google.com/'
  const ahorras = 1500
</script>