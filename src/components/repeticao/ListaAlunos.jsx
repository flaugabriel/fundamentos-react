import React from 'react'
import alunos from '../../data/Alunos'

export default props => {

  const alunosLsx = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} - {aluno.nota}
      </li>
    )
  })
  return (
    <div>
      <ul>
        {alunosLsx}
      </ul>
    </div>
  )
}