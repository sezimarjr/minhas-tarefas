import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotãoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastarTarefa = (e: FormEvent) => {
    e.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      9,
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao
    )

    dispatch(cadastrar(tarefaParaAdicionar))
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Titulo"
        />
        <Campo
          as={'textarea'}
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          name=""
          id=""
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridades</p>

          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotãoSalvar>Cadastrar</BotãoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
