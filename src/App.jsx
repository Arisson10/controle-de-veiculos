import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'
import './index.css'

function App() {
  const [vagas] = useState([
    { id: 1, nome: 'vaga 1' },
    { id: 2, nome: 'vaga 2' },
    { id: 3, nome: 'vaga 3' },
    { id: 4, nome: 'vaga 4' },
    { id: 5, nome: 'vaga 5' }
  ])

  const [veiculos, setVeiculos] = useState([
    {
      placa: 'ABC1234',
      nomeProprietario: 'Paulo Pin',
      numeroApto: '1103',
      blocoApto: 'B',
      modeloVeiculo: 'Marea',
      corVeiculo: 'Rosa',
      idVaga: 1
    }
  ])

  const vagasDisponiveis = useMemo(() => {
    const ocupadas = veiculos.map(v => v.idVaga)
    return vagas.filter(v => !ocupadas.includes(v.id))
  }, [veiculos, vagas])

  const cadastrarVeiculo = (veiculo) => {
    setVeiculos(prev => [...prev, veiculo])
    alert('Cadastro realizado com sucesso!')
    console.log('Veículo cadastrado:', veiculo)
  }

  const removerVeiculo = (placa) => {
    setVeiculos(prev => prev.filter(v => v.placa !== placa))
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/vagas">Listar Vagas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CadastroPage vagasDisponiveis={vagasDisponiveis} onSalvar={cadastrarVeiculo} />} />
        <Route path="/vagas" element={<ListaPage veiculos={veiculos} onRemover={removerVeiculo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
