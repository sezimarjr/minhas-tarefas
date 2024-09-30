import * as enums from '../utils/enums/Tarefa'
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number
  constructor(
    id: number,
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
