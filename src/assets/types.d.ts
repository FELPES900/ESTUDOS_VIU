import { ref } from "vue";

type Question = {
    question: string;
    options: string[];
    correctAnswer: number;
}
const quiz: Array<Question> | Question[] = [
  {
    question: "Qual é a linguagem de programação mais usada no desenvolvimento web?",
    options: ["Python", "JavaScript", "Ruby", "C++"],
    correctAnswer: 1, // JavaScript
  },
  {
    question: "Qual é o propósito principal do Git?",
    options: [
      "Desenvolvimento de inteligência artificial",
      "Controle de versão de código",
      "Desenvolvimento de jogos",
      "Criação de páginas web",
    ],
    correctAnswer: 1, // Controle de versão de código
  },
  {
    question: "O que significa HTML?",
    options: [
      "HyperText Markup Language",
      "Hyper Transfer Markup Language",
      "HighText Machine Language",
      "HyperText Management Language",
    ],
    correctAnswer: 0, // HyperText Markup Language
  },
  {
    question: "Qual das seguintes linguagens é tipicamente usada para estilizar páginas web?",
    options: ["Python", "HTML", "CSS", "C#"],
    correctAnswer: 2, // CSS
  },
  {
    question: "Qual é o framework JavaScript mais associado ao desenvolvimento front-end?",
    options: ["Django", "React", "Laravel", "Spring"],
    correctAnswer: 1, // React
  },
  {
    question: "Qual empresa desenvolveu a linguagem de programação Java?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    correctAnswer: 2, // Sun Microsystems
  },
  {
    question: "Qual é a função principal do CSS?",
    options: [
      "Definir a estrutura do documento",
      "Adicionar lógica ao código",
      "Estilizar e layout de páginas web",
      "Compilar o código fonte",
    ],
    correctAnswer: 2, // Estilizar e layout de páginas web
  },
  {
    question: "Em qual ano a linguagem Python foi lançada?",
    options: ["1991", "1985", "2000", "1995"],
    correctAnswer: 0, // 1991
  },
  {
    question: "Qual das seguintes linguagens é mais conhecida por sua simplicidade e legibilidade?",
    options: ["C++", "Java", "Python", "Assembly"],
    correctAnswer: 2, // Python
  },
  {
    question: "Qual é a principal função do SQL?",
    options: [
      "Criar interfaces de usuário",
      "Manipular e gerenciar bancos de dados",
      "Desenvolver aplicativos móveis",
      "Proteger a rede",
    ],
    correctAnswer: 1, // Manipular e gerenciar bancos de dados
  }
];
const preco = ref(500);
const status = ref<boolean>(false);
const letras = ['a', 'b', 'c']
const user = {
    name: 'Felipe',
    age: 25,
    confianza:true
}
const puntajeCredito = 600
const saludo = 'Hola a todos'
const buttonHtml = '<button>Enviar</button>'
const color = "color: red; background-color: black"
const website = 'https://google.com/'
const ahorras = 1500



function deposito(acresion:number){
  preco.value += acresion
};

function trocarStatus(){
  status.value = !status.value
}

function computed(){
  if (preco.value > 500){
    return 'verde'
  }else{
    return 'rojo'
  }
}

export {
  quiz,
  preco,
  status,
  letras,
  user,
  puntajeCredito,
  saludo,
  buttonHtml,
  color,
  website,
  ahorras,
  deposito,
  trocarStatus,
  computed
}