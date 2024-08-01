import style from "./ModalBatle.module.css";

//Components
import CardHero from "../CardHero/CardHero";

export default function ModalBatle(
    {}
){
    return(
        <div className={style.divModal}>
            <div className={style.modal}>
                <span className={style.titulo}>
                    <span className="material-symbols-outlined">swords</span>
                    <h2>Batalha</h2>
                    <span className="material-symbols-outlined">swords</span>
                </span>

                <span className={style.herois}>
                    <CardHero />
                    <h2>VS</h2>
                    <CardHero />
                </span>
                <span className={style.resultado}>
                    <span className="material-symbols-outlined">military_tech</span>
                    <p>Bob Marley é o vencedor</p>
                    <span className="material-symbols-outlined">military_tech</span>
                </span>
                <button>Nova Batalha</button>
            </div>
        </div>
    )
}