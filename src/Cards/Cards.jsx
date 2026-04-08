import Elementos from "../Componentes/Elementos";

function Cards (props) {
    return (
        <div className="card">
            <Elementos foto={props.foto} nome={props.item} />
            <h3>{props.item}</h3>
            <span className="details">
                <p>Preço: {props.preco}</p>
                <p>Descrição: {props.descricao}</p>
            </span>
        </div>
    );
}
export default Cards;