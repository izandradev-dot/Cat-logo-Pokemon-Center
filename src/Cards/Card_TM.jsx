import Elementos from "../Componentes/Elementos";   

function Card_TM (props) {
    return (
        <div className="card">
            <Elementos foto={props.foto} nome={props.item} />
            <h3> {props.item} </h3>
            <span className="details">
            <p> Preço: {props.preco} </p>    
            <p> Descrição: {props.descricao} </p>
            <p> Tipo: {props.tipo} </p>
            <p> Categoria: {props.categoria} </p>
            <p> Poder: {props.poder} </p>
            <p> Precisão: {props.precisao} </p>
            <p> PP: {props.pp} </p>
            <p> Faz contato?: {props.contato} </p>
            </span>
        </div>
    );
}
export default Card_TM;