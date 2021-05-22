import React from 'react'

export default props => {
  const numero = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return (
    <h2>Este foi o numero sorteado {numero}</h2>
  );
}