import { Card } from "../Card/Card";
import "./Secoes.css";
import secoes from "../../secoes.json";
import PropTypes from 'prop-types'

const subSecoes = [];

// function percorreSubSecoes(){
//   if(subSecoes.length > 0){
//     return (
      
//     )
//   }
// }

export const Secoes = ({entradas, saladas, pratosPrincipais, sobremesas, bebidas, bSecoes}) => {

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
            <h2 value="pratosPrincipais" className="nomeSecao">{pratosPrincipais}</h2>
          </div>
          <div>
            <h2 value="sobremesas" className="nomeSecao">{sobremesas}</h2>
          </div>
          <div>
            <h2 value="bebidas" id="nomeSecao">{bebidas}</h2>
          </div>
        </div>
        <div id="div2"></div>
      </div>

      <div className="subSecoes">
        <h3>Carnes Vermelhas</h3>
        <h3>Aves</h3>
        <h3>Peixes e frutos do mar</h3>
        <h3>Massas</h3>
        <h3>Risotos</h3>
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
    bebidas: PropTypes.string.isRequired,
    subSecoes: PropTypes.array
  })
}