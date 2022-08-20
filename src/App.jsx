import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Secoes } from './components/Secoes/Secoes';
import secoes from './secoes.json'

function App() {
  const subSecoesPrincipais = new Set(secoes.pratosPrincipais.map((p) => p.secao));
  const subSecoesBebidas = new Set(secoes.bebidas.map((p) => p.secao));

  return (
    <div className='divPrincipal'>
      <Navbar />
      <Secoes nome='Entradas' produtos={secoes.entradas} />
      <Secoes nome='Saladas' produtos={secoes.saladas} />
      <Secoes nome='Pratos principais' produtos={secoes.pratosPrincipais} subSecoes={Array.from(subSecoesPrincipais)} />
      <Secoes nome='Sobremesas' produtos={secoes.sobremesas} />
      <Secoes nome='Bebidas' produtos={secoes.bebidas} subSecoes={Array.from(subSecoesBebidas)} />
      <Rodape />
    </div>
  )
}

export default App