<!-- AULA 1 ATE A AULA 4 -->
<!-- <template>
  <h1>Ola a todos</h1>
  <h2>{{saludo.toUpperCase()}}</h2>
  {{ buttonHtml }} -->
  <!-- <span v-html="buttonHtml"></span> Pegar a string que foi gerado e faz a inserção no html -->
  <!-- <p v-bind:style="color">TESTE</p> Passando uma variavel para o v-bind:style -->
  <!-- <a v-bind:href="website">Google</a> Passando uma variavel para o v-bind:href n -->
  <!-- {{ 2*9 }} -->
  <!--<h2 v-bind:style="`color :${ahorras >= 200 ? 'green' : 'red'}`">${{ ahorras }}</h2>--> <!-- maneiras de colocar o CSS dentro do HTML -->
  <!-- <h2 v-bind:class="ahorras >= 200 ? 'conFondo' : 'sinFondo'">${{ ahorras }}</h2>
</template> -->

<!-- <script setup lang="ts">
  const saludo = 'Hola a todos'
  const buttonHtml = '<button>Enviar</button>'
  const color = "color: red; background-color: black"
  const website = 'https://google.com/'
  const ahorras = 1500
</script> -->


<!-- AULA 5 -->
<!-- <template> -->
  <!-- <p v-if="puntajeCredito >= 900">Exelente Cliente</p> Operador if e else -->
  <!-- <p v-else-if="puntajeCredito <=700 && puntajeCredito >= 500">Cliente Regular</p> Não é permitido o uso de outra teg entre as confições do operador if e else -->
  <!-- <p v-else>Cliente Inaceptable</p> -->
<!-- </template> -->

<!-- <script setup lang="ts">
  const puntajeCredito = 600
</script> -->


<!-- AULA 6 -->
<!-- <template> -->
  <!-- <p v-show="puntajeCredito >= 900">Exelente Cliente</p> Operador que funciona como o displau do css -->
<!-- </template>

<script setup lang="ts">
  const puntajeCredito = 600
</script> -->

<!-- AULA 7 -->
<!-- <template>
  <p>Lista de Numeros
    <span v-for="numero in 100" v-bind:key="numero">
      {{ numero }} -
    </span>
  </p>
  <ul>
    <li v-for="(letra,indice) in letras" v-bind:key="indice">
      {{ letra }} {{ indice }}
    </li>
  </ul>
  <h5>Delestrar meu nomee</h5>
  <ul>
    <li v-for="letra in 'FELIPE'" v-bind:key="letra">
      {{ letra }}
    </li>
  </ul>
  <div v-for="(valor, propriedade, indice) in user" v-bind:key="indice">
    {{ propriedade }}: {{ valor }}
  </div>
</template>

<script setup lang="ts">
  const letras = ['a', 'b', 'c']
  const user = {
    name: 'Felipe',
    age: 25,
    confianza:true
  }
</script> -->

<!-- AULA 8 -->
<!-- <template>
  <div>
    <h1>QUESTOES</h1>
    <hr>
    <div v-for="(question, indice) in quiz" v-bind:key="indice">
      <h4>{{indice+1}}: {{ question.question }}</h4>
      <div v-for="(option,indiceeOption) in question.options" v-bind:key="indiceeOption">
        <p>
          {{ option }}
          ({{ question.correctAnswer === indiceeOption ? '✔' : '❌' }})
        </p>
      </div>
    </div>
  </div>
</template> -->

<!-- <script setup lang="ts">
  import {quiz} from './assets/types.d'
</script> -->

<!-- AULA 10 ATE 12-->

<!-- <template>
  <h2 v-bind:class="types.computed()">${{types.preco}}</h2>
  {{ types.status }}
  <button @click="types.deposito(100)">Deposite $100</button>
  <button @click="types.trocarStatus()">Trocar status</button>
</template>
 -->

<!-- AULA 13-->
<template>
  
</template>
<script setup lang="ts">
  import * as types from './assets/types.d'
</script>