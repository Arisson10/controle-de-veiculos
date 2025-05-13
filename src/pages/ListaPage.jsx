import ListaVeiculos from '../components/ListaVeiculos'

function ListaPage({ veiculos, onRemover }) {
  return (
    <div className="container">
      <h2>Lista de Veículos</h2>
      <ListaVeiculos veiculos={veiculos} onRemover={onRemover} />
    </div>
  )
}

export default ListaPage