import foto1 from '../imagens/revive.png';
import foto2 from '../imagens/maxrevive.png';
import foto3 from '../imagens/repel.png';
import foto4 from '../imagens/maxrepel.png';
import foto5 from '../imagens/escaperope.png';
import foto6 from '../imagens/fishingrod.png';

const adventure = [
  {
     id: 1,
     foto: foto1,
     item: "Revive",
     preco: "₽2,000",
     descricao: "Um medicamento que pode ser usado para reviver um único Pokémon que tenha desmaiado. Ele também restaura metade do HP máximo do Pokémon."
    },
   {
     id: 2,
     foto: foto2,
     item: "Max Revive",
     preco: "₽5,000",
     descricao: "Um medicamento que pode ser usado para reviver um único Pokémon que tenha desmaiado. Ele também restaura completamente o HP máximo do Pokémon."
    },
   {
    id: 3,
     foto: foto3,
     item: "Repel",
     preco: "₽400",
     descricao: "Um item que impede que Pokémon selvagens de nível baixo apareçam de repente por um tempo."
    },
  {
    id: 4,
     foto: foto4,
     item: "Max Repel",
     preco: "₽900",
     descricao: "Um item que impede que Pokémon selvagens de nível baixo pulem em você por um tempo. Sua duração é maior que a do Repel."
   },
  {
    id: 5,
     foto: foto5,
     item: "Escape Rope",
     preco: "₽500",
     descricao: "Uma corda longa e resistente. Use-a para escapar instantaneamente de locais como cavernas ou masmorras. Pode ser usada quantas vezes forem necessárias."
   },
  {
    id: 6,
     foto: foto6,
     item: "Fishing Rod",
     preco: "₽1,000",
     descricao: "Use-o perto da água para pescar vários tipos de Pokémon."
   }

]

export default adventure;