import { Card } from "../Card/Card";
import { SubSecoes } from "../SubSecoes/SubSecoes";
import "./Secoes.css";
import secoes from "../../secoes.json";
import PropTypes from 'prop-types'

const subSecoesPP = ["Carnes vermelhas", "Aves", "Peixes e frutos do mar", "Massas", "Risotos"];
const subSecoesB = ["Sem àlcool", "Vinhos", "Drinks", "Cervejas"];

export const Secoes = ({entradas, saladas, pratosPrincipais, sobremesas, bebidas}) => {
  return (
    <div className="secoesCards">
      <div>
        <h2 className="nomeSecao">{entradas}</h2>
        {subSecoesPP.map((item, index) => {
          return <SubSecoes subSecoes={item} key={index} />;
        })}
        <div className="cards">
          {secoes.entradas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
        </div>
      </div>
      <div className="divCards">
        <h2 className="nomeSecao">{saladas}</h2>
        <div className="cards">
          {secoes.saladas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
        </div>
      </div>
      <div className="divCards">
        <h2 className="nomeSecao">{pratosPrincipais}</h2>
        <div className="cards">
          {secoes.pratosPrincipais.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
        </div>
      </div>
      <div className="divCards">
        <h2 className="nomeSecao">{sobremesas}</h2>
        <div className="cards">
          {secoes.sobremesas.map((item, index) => {
            return <Card card={item} key={index} />;
          })}
        </div>
      </div>
      <div className="divCards">
        <h2 className="nomeSecao">{bebidas}</h2>
        <div className="cards">
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