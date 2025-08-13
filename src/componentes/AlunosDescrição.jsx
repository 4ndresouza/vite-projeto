import React from "react";


export const AlunosDescrição = (props) => {
    console.log('Props do componente',props);
  return (
    <div>
<strong>Nome</strong> <span>props.nome</span> <br />
<strong>Idade:</strong> <span>props.idade</span> <br />
<hr />

    </div>
  )
}
export default AlunosDescrição;

