import "./header.css"
import logo from '../../assets/logo.png'

export default function HeaderNav(props){
  return(
    <div className="headerNav">
      <div className="name-page">
        {props.name}
      </div>
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="menu">
        <button>Anuncie seu carro!</button>
        <button>Ajuda</button>
        <button> 
          teste
        <a href="./login"/>
        </button>
      </div>
    </div>
    
  )
}