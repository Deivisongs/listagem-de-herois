import React, {useState, useEffect} from "react";
import style from "./SectionHero.module.css";

//Componets
import CardHero from "../CardHero/CardHero";

export default function SectionHero(){

    const [conteudo, setConteudo] = useState(null)
    const [carregando , setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    const [heroi, setHeroi] = useState([])

    function retornoId(retorno){
        setHeroi(prevItems => [...prevItems, retorno]);
        console.log(heroi)
    }



    useEffect(() => {
        const api = async () => {
            try{

                const buscaDadosAnteriores = localStorage.getItem('herois')
                if(buscaDadosAnteriores){
                    setConteudo(JSON.parse(buscaDadosAnteriores));
                    setCarregando(false);
                }else{
                    const resposta = await fetch('https://homologacao3.azapfy.com.br/api/ps/metahumans');

                    if(!resposta.ok){
                        setErro(true);
                    }

                    const resutado = await resposta.json();
                    setConteudo(resutado)
                }


            }catch(error){
                setErro(error);
            }finally{
                setCarregando(false);
            }
        }

        api();

    }, []);


    if(carregando){
        return <div>Carregando...</div>
    }
    if(erro){
        return <div>Erro: {erro.message}</div>
    }

    return(        
        <section className={style.sectionHero}>

        {
            conteudo && conteudo.map(element => (        
                <CardHero
                key={element.id}
                idPerson={element.id}
                imagem={element.images.lg}
                nome={element.name}
                tipo={element.slug}
                inteligence={element.powerstats.intelligence}
                strength={element.powerstats.strength}
                speed={element.powerstats.speed}
                durability={element.powerstats.durability}
                power={element.powerstats.power}
                combat={element.powerstats.combat}
                retornoId={retornoId}
                />
            ))
        }

        </section>
    )
}