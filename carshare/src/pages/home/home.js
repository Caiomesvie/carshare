import HeaderNav from "../../components/header/header"
import "./home.css"
import carImg from '../../assets/car.png'

export default function Home(){
  return(
    <div>
      <HeaderNav></HeaderNav>
      <div className="home">
        <div className="navbar">
          <div className="input-filters">
            <fieldset>Tipo</fieldset>
            <input type="text"/>
            <fieldset>Marca</fieldset>
            <input type="text"/>
            <fieldset>Modelo</fieldset>
            <input type="text"/>
            <fieldset>Versão</fieldset>
            <input type="text"/>
            
            valor<input type="checkbox"/><br/>
            valor<input type="checkbox"/><br/>
            valor<input type="checkbox"/><br/>
            valor<input type="checkbox"/><br/>
          </div>
        </div>
        <div className="conteudo">
          <div className="car">
            <img src={carImg}/>
            <text>Modelo da garanga</text>
            <text>Local: ararari</text>
          </div>
          <div className="car">
            <img src={carImg}/>
            <text>Modelo da garanga</text>
            <text>Local: ararari</text>
          </div>
          <div className="car">
            <img src={carImg}/>
            <text>Modelo da garanga</text>
            <text>Local: ararari</text>
          </div>
          <div className="car">
            <img src={carImg}/>
            <text>Modelo da garanga</text>
            <text>Local: ararari</text>
          </div>
        </div>
      </div>
    </div>
    
  )
}