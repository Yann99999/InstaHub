import './card.css'

export default function Card(props){
    return(
        <div className="card">
            <h4>{props.nome}</h4>
            <span>Tecnologia usada: {props.lang}</span>
            <div className='card_line'>
                <span>Data de Criação: {props.dt}</span>
                <a href={props.link}>Veja</a>
            </div>
            
        </div>
    )
}