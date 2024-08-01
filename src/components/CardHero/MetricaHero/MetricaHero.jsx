import React ,{useState, useEffect} from "react";
import style from "./MetricaHero.module.css";

export default function MetricaHero({parametro, conteudo}){
    const [valor, setValor] = useState(0);
    
    useEffect(() => {
        setValor(conteudo);
    }, [conteudo]);

    return(
        
        <span className={style.span}>
            <span className={style.parametro}>
                <p>{parametro}:</p>
                <p>{conteudo}</p>
            </span>
            <span className={style.grafico}>
                <span className={style.conteudo} style={{width: `${valor}%`}}></span>
            </span>
        </span>
    )
}