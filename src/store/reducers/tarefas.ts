import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar typescript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Ver a aula 3 da EBAC'
    ),
    new Tarefa(
      2,
      'Pagar a conta de internet',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Baixar fatutra gmail'
    ),
    new Tarefa(
      3,
      'Ir para academia',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Fazer treino B'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
