import style from "./Header.module.css";

export default function Header(){
    return(
        <header className={style.header}>
            <div className={style.divLogo}>
                <h1>Hero<strong>+</strong></h1>
            </div>
            <input type="text" placeholder="Buscar..." className={style.busca}/>
        </header>
    )
}