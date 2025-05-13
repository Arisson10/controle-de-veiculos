import React from 'react'
import { Form, Input, Select, Button, Row, Col } from 'antd'

const { Option } = Select

function FormularioVeiculo({ vagasDisponiveis, onSalvar }) {
  const [form] = Form.useForm()

  const handleFinish = (values) => {
    onSalvar(values)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
    >
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Placa"
            name="placa"
            rules={[{ required: true, message: 'Informe a placa' }]}
          >
            <Input placeholder="Placa" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Nome do Proprietário"
            name="nomeProprietario"
            rules={[{ required: true, message: 'Informe o nome do proprietário' }]}
          >
            <Input placeholder="Nome do Proprietário" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Número do Apto"
            name="numeroApto"
            rules={[{ required: true, message: 'Informe o número do apto' }]}
          >
            <Input placeholder="Número do Apto" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Bloco do Apto"
            name="blocoApto"
            rules={[{ required: true, message: 'Informe o bloco do apto' }]}
          >
            <Input placeholder="Bloco do Apto" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Modelo do Veículo"
            name="modeloVeiculo"
            rules={[{ required: true, message: 'Informe o modelo do veículo' }]}
          >
            <Input placeholder="Modelo do Veículo" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Cor do Veículo"
            name="corVeiculo"
            rules={[{ required: true, message: 'Informe a cor do veículo' }]}
          >
            <Input placeholder="Cor do Veículo" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Vaga"
            name="idVaga"
            rules={[{ required: true, message: 'Selecione uma vaga' }]}
          >
            <Select placeholder="Selecione a vaga">
              {vagasDisponiveis.map(v => (
                <Option key={v.id} value={v.id}>
                  {v.nome}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormularioVeiculo
