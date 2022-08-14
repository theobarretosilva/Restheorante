import { Card } from "../Card/Card";
import { SubSecoes } from "../SubSecoes/SubSecoes";
import "./Secoes.css";
import secoes from "../../secoes.json";
import PropTypes from 'prop-types'
import html from 'react-inner-html'

const subSecoesPP = ["Carnes vermelhas", "Aves", "Peixes e frutos do mar", "Massas", "Risotos"];
const subSecoesB = ["Sem àlcool", "Vinhos", "Drinks", "Cervejas"];

function percorreSubSecoesPP(){
  const divSubSecoes = document.getElementById('divSubSecoes');
  if(subSecoesPP.length > 0){
    subSecoesPP.map((item, index) => {
      return divSubSecoes.innerHTML = <h3 key={index}>{item}</h3>
    })
  }
}

function percorreSubSecoesB(){
  const divSubSecoes = document.getElementById('divSubSecoes');
  if(subSecoesB.length > 0){
    subSecoesPP.map((item, index) => {
      return divSubSecoes.innerHTML = <SubSecoes subSecoes={item} key={index} />
    })
  }
}

export const Secoes = ({entradas, saladas, pratosPrincipais, sobremesas, bebidas}) => {

  return (
    <div className="divGeralSecoes">
      <div className="divSecoes">
        <div id="div1"></div>
        <div className="secoes">
          <div>
            <h2 value="entradas" className="nomeSecao">{entradas}</h2>
          </div>
          <div>
            <h2 value="saladas" className="nomeSecao">{saladas}</h2>
          </div>
          <div>
            <h2 onClick={percorreSubSecoesPP} id="pratosPrincipais" value="pratosPrincipais" className="nomeSecao">{pratosPrincipais}</h2>
          </div>
          <div>
            <h2 value="sobremesas" className="nomeSecao">{sobremesas}</h2>
          </div>
          <div>
            <h2 onClick={percorreSubSecoesB} value="bebidas" id="nomeSecao">{bebidas}</h2>
          </div>
        </div>
        <div id="div2"></div>
      </div>

      <div className="secoesECards">
        <div id="divSubSecoes" className="divSubSecoes">
          
        </div>

        <div className="secoesCards">
          {secoes.entradas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
          {secoes.saladas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
          {secoes.pratosPrincipais.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
          {secoes.sobremesas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
          {secoes.bebidas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
        </div>
      </div>
      
    </div>
  );
};

Secoes.propTypes = {
  card: PropTypes.shape({
    item: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  }),

  secoes: PropTypes.shape({
    entradas: PropTypes.string.isRequired,
    saladas: PropTypes.string.isRequired,
    pratosPrincipais: PropTypes.string.isRequired,
    sobremesas: PropTypes.string.isRequired,
    bebidas: PropTypes.string.isRequired
  })
}