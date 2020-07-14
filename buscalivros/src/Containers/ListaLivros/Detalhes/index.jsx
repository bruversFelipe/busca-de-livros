import React, { memo } from 'react';
import DetalhesWrapper from './style';

const Detalhes = memo(({ livroDetalhes }) => (
  <DetalhesWrapper>
    <div>
      <h3>{livroDetalhes.titulo}</h3>
      <span>{livroDetalhes.isbn}</span>
    </div>
    <div className="autor-editora">
      <div>
        <strong>De:</strong> {livroDetalhes.autor}
      </div>
      <div>
        <strong>Editora:</strong> {livroDetalhes.editora}
      </div>
    </div>
    <div className="caracteristicas">
      Características
      <div>
        <div><strong>Idioma:</strong>{livroDetalhes.idioma}</div>
        <div><strong>Ano:</strong>{livroDetalhes.ano}</div>
      </div>
      <div>
        <div><strong>Altura:</strong>{livroDetalhes.altura}cm</div>
        <div><strong>Largura:</strong>{livroDetalhes.largura}cm</div>
      </div>
      <div>
        <div><strong>Comprimento:</strong>{livroDetalhes.comprimento}cm</div>
        <div><strong>Peso:</strong>{livroDetalhes.peso}g</div>
      </div>
    </div>
  </DetalhesWrapper>
));

export default Detalhes;
