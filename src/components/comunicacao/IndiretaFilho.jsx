import React from "react";

export default (props) => {
  const min = 50;
  const max = 70;
  const geraIdade = () => parseInt(Math.random() * (20)) + 50
  const geraNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => props.quandoClicar("Walter", geraIdade, geraNerd)}>
        Fornecer informações
      </button>
    </div>
  );
};
