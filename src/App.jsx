import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header.jsx';
import Footer from './Componentes/Footer.jsx';
import Slideshow from './Componentes/Slideshow.jsx';

import Cards from './Cards/Cards.jsx';
import Card_TM from './Cards/Card_TM.jsx';

import pokeballs from './Info/info_pokeballs.js'; 
import toys from './Info/info_toys.js';
import tms from './Info/info_tms.js';
import potions from './Info/info_potions.js';
import adventure from './Info/info_adventure.js';

function App() {
  const [secao, setSecao] = useState('menu');

  return (
   <>
    <Header />
    <Slideshow />
  
    <div className={secao === "menu" ? "menu-inicial" : "menu-top"}>
      <button onClick={() => setSecao('menu')}>Página Inicial </button>
      <button onClick={() => setSecao('potions')}>Potions</button>
      <button onClick={() => setSecao('tms')}>TMs</button>
      <button onClick={() => setSecao('pokeballs')}>Pokeballs</button>
      <button onClick={() => setSecao('adventure')}>Adventure</button>
      <button onClick={() => setSecao('toys')}>Toys</button>
    </div>

    

      <div  className='container'>

        {secao === 'potions' && 
          potions.map( (potion, index)=>(
          <Cards
          key={index}
          foto={potion.foto}
          item={potion.item}
          preco={potion.preco}
          descricao={potion.descricao}
          />
          ))
        }

        {secao === 'adventure' &&
          adventure.map( (adv, index)=>(
          <Cards
          key={index}
          foto={adv.foto}
          item={adv.item}
          preco={adv.preco}
          descricao={adv.descricao}
          />
          ))
        } 

        {secao === 'pokeballs' &&
          pokeballs.map( (pokeball, index)=>(
          <Cards
          key={index}
          foto={pokeball.foto}
          item={pokeball.item}
          preco={pokeball.preco}
          descricao={pokeball.descricao}
          />
          ))
        }

        {secao === 'tms' &&
          tms.map( (tm, index)=>(
          <Card_TM
          key={index}
          foto={tm.foto}
          item={tm.item}
          preco={tm.preco}
          descricao={tm.descricao}
          tipo={tm.tipo}
          categoria={tm.categoria}
          poder={tm.poder}
          precisao={tm.precisao}
          pp={tm.pp}
          contato={tm.contato}
          />
          ))
        }

        {secao === 'toys' &&
          toys.map( (toy, index)=>(
          <Cards
          key={index}
          foto={toy.foto}
          item={toy.item}
          preco={toy.preco}
          descricao={toy.descricao}
          />
          ))
        }
       

      </div>
    
      <Footer />
      </>
  );
}

export default App
