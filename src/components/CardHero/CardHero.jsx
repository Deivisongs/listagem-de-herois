import {useState} from "react";
import style from "./CardHero.module.css";

//Componets
import MetricaHero from "./MetricaHero/MetricaHero";

export default function CardHero({ retornoId, idPerson, imagem, nome, tipo, inteligence, strength, speed, durability, power, combat}){


    const [mostrarMais, setMostrarMais] = useState(false);

    const abrir = () => {
        setMostrarMais(prevState => !prevState);
    }

    function enviaIdparaComponentePai(){
        retornoId(idPerson)
    }


    return(
    <div className={style.cardHero} onClick={enviaIdparaComponentePai}>
        <div className={style.img}>
            <img src={imagem} alt="Imagem Personagem" />
        </div>
        
        <h2>{nome}</h2>
        <p className={style.tipo}>{tipo}</p>
        <div className={`${style.verMais} ${mostrarMais ? style.mostrar : style.ocultar}`}>
            <MetricaHero
            parametro="Inteligence"
            conteudo={inteligence}
            />
            <MetricaHero
            parametro="Strength"
            conteudo={strength}
            />
            <MetricaHero
            parametro="Speed"
            conteudo={speed}
            />
            <MetricaHero
            parametro="Durability"
            conteudo={durability}
            />
            <MetricaHero
            parametro="Power"
            conteudo={power}
            />
            <MetricaHero
            parametro="Combat"
            conteudo={combat}
            />

        </div>
        <span>
            <button onClick={abrir}>
                Ver Mais
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            
        </span>
        
    </div>
    )
}