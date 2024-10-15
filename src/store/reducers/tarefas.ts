import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar typescript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Ver a aula 3 da EBAC'
    },
    {
      id: 2,
      titulo: 'Pagar a conta de internet',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Baixar fatutra gmail'
    },
    {
      id: 3,
      titulo: 'Ir para academia',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Fazer treino B'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((t) => t.id !== action.payload)]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Tarefa ja existe')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
