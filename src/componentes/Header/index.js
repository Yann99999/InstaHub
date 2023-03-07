import './header.css'
export default function Header(props){
    return(
        <header>
            <div className="user-profile">
                <h3>{props.nome}</h3>
                <img src={props.foto}/>
                <p>{props.bio}</p>
            </div>
            <article className="user_stats">
                <div className="user_stats_label">
                    <span>Seguidores</span>
                    <span>Seguindo</span>
                    <span>Repositórios</span>
                </div>
                <div className="user_stats_number">
                    <span>{props.seguidores}</span>
                    <span>{props.seguindo}</span>
                    <span>{props.repositorios}</span>
                </div>
            </article>
        </header>
    )
}