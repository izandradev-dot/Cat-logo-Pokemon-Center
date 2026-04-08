import { useEffect, useState } from "react";
import img0 from "../imagens/kinga.jpg";
import img1 from "../imagens/nurse.avif";
import img2 from "../imagens/pokemoncenter.jpg";
import img3 from "../imagens/chansey.png";
import img4 from "../imagens/blissey.png";
import img5 from "../imagens/wiggly.png";
import img6 from "../imagens/nurseandaudi.png";
import img7 from "../imagens/audi.png";
import img8 from "../imagens/comfey.png";
import img9 from "../imagens/indeedee.jpg";
import img10 from "../imagens/healed.png";

function Slideshow () {

    const imagens = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [imagens.length]);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };


    return (
        <div className="slideshow">
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="banner"/>
       
         <div className="controles">
            <button onClick={voltarSlide}> Anterior </button>
            <button onClick={proximoSlide}> Próximo  </button>
         </div>    
         
        </div>
    );
}

export default Slideshow;