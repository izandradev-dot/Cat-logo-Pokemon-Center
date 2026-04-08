import foto0 from '../imagens/logo.jpg';
import foto1 from '../imagens/pokemoncenter.avif';

function Header() {
  return (
    <header>
      <div className="topo">
      <img src={foto0} alt="Logo do Pokémon Center" className="logo" />
      </div>
      
      <div className="topoa">
      <img src={foto1} alt="Pokemon Center" className="foto" />
      </div>

    </header>
  );
}
export default Header;