import foto1 from '../imagens/darkpulse.png';
import foto2 from '../imagens/earthquake.png';
import foto3 from '../imagens/thunderbolt.png';
import foto4 from '../imagens/flamethrower.png';
import foto5 from '../imagens/icebeam.png';

const tms = [
   {
     id: 1,
     foto: foto1,
     item: "TM07 - Dark Pulse",
     preco: "₽100,000",
     descricao: "Dark Pulse causa dano e tem 20% de chance de fazer o alvo flinch (se o alvo ainda não tiver se movido). Pokémon com a habilidade Inner Focus ou aqueles que estão atrás de um Substituto não podem ser feitos flinch.",
     tipo: "Dark",
     categoria: "Especial",
     poder: 80,
     precisão: 100,
     PP: "15   (máx. 24)",
     contato: "Não"
    },
   {
     id: 2,
     foto: foto2,
     item: "TM100 - Earthquake",
     preco: "₽100,000",
     descricao: "Earthquake causa dano e terá o dobro de poder se o oponente estiver debaixo da terra devido ao movimento Dig.",
     tipo: "Ground",
     categoria: "Físico",
     poder: 100,
     precisão: 100,
     PP: "10   (máx. 16)",
     contato: "Não"
    },
   {
    id: 3,
     foto: foto3,
     item: "TM24 - Thunderbolt",
     preco: "₽80,000",
     descricao: "Thunderbolt causa dano e tem 10% de chance de paralisar o alvo. Pokémon do tipo Elétrico, aqueles com a habilidade Limber ou aqueles que estão atrás de um Substituto não podem ser paralisados.",
     tipo: "Electric",
     categoria: "Especial",
     poder: 90,
     precisão: 100,
     PP: "15   (máx. 24)",
     contato: "Não"
    },
  {
    id: 4,
     foto: foto4,
     item: "TM35 - Flamethrower",
     preco: "₽80,000",
     descricao: "Flamethrower causa dano e tem 10% de chance de queimar o alvo. Pokémon do tipo Fogo, aqueles com a habilidade Flame Body, e pokémon com a habilidade Water Veil ou aqueles que estão atrás de um Substituto não podem ser queimados.",
     tipo: "Fire",
     categoria: "Especial",
     poder: 90,
     precisão: 100,
     PP: "15   (máx. 24)",
     contato: "Não"
    },
  {
    id: 5,
     foto: foto5,
     item: "TM13 - Ice Beam",
     preco: "₽90,000",
     descricao: "Ice Beam causa dano e tem 10% de chance de congelar o alvo. Pokémon do tipo Gelo, aqueles com a habilidade Magma Armor ou aqueles atrás de um Substituto não podem ser congelados.",
     tipo: "Ice",
     categoria: "Especial",
     poder: 90,
     precisão: 100,
     PP: "10   (máx. 16)",
     contato: "Não"
    }
]

export default tms;