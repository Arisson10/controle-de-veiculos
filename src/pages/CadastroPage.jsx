import FormularioVeiculo from '../components/FormularioVeiculo'

function CadastroPage({ vagasDisponiveis, onSalvar }) {
  return (
    <div className="container">
      <h2>Cadastro de Reserva</h2>
      <FormularioVeiculo vagasDisponiveis={vagasDisponiveis} onSalvar={onSalvar} />
    </div>
  )
}

export default CadastroPage