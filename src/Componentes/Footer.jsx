import foto0 from '../imagens/logo.jpg'

function Footer() {
  return (
    <footer>
        <div className="rodape">
      <img src={foto0} alt="Logo do Pokémon Center" />
      <p>© 2024 Pokémon Center. Todos os direitos reservados.</p>
      <p> - Izandra Nascimento - Situação de Aprendizagem - 2026.1 </p>
      </div>
    </footer>
  )
}

export default Footer;