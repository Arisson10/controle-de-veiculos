import React from 'react'
import { List, Button, Typography, Card } from 'antd'

const { Text, Title } = Typography

function ListaVeiculos({ veiculos, onRemover }) {
  return (
    <div>
      <Title level={3}>Veículos Cadastrados</Title>

      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={veiculos}
        renderItem={v => (
          <List.Item>
            <Card
              title={`Placa: ${v.placa}`}
              extra={
                <Button type="primary" danger onClick={() => onRemover(v.placa)}>
                  Remover
                </Button>
              }
            >
              <p><Text strong>Proprietário:</Text> {v.nomeProprietario}</p>
              <p><Text strong>Modelo:</Text> {v.modeloVeiculo}</p>
              <p><Text strong>Vaga:</Text> {v.idVaga}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListaVeiculos
