import React from 'react';

const style = {
  icon: {
    cursor: 'pointer',
    color: '#4c8def',
  },
}

function columns(openModal) {
  return [
    {
      key: 1,
      dataIndex: 'titulo',
      title: 'Livro',
      align: 'left',
      render: (titulo, row) => (
        <div>
          <p>{titulo}</p>
          {row.isbn}
        </div>
      )
    },
    {
      key: 2,
      dataIndex: 'autor',
      title: 'Autor',
      align: 'left',
    },
    {
      key: 3,
      dataIndex: 'editora',
      title: 'Editora',
      align: 'left',
    },
    {
      key: 4,
      dataIndex: 'ano',
      title: 'Ano',
      align: 'center',
    },
    {
      key: 5,
      dataIndex: 'Ações',
      title: 'Ações',
      align: 'center',
      render: (_, row) => (
        <i style={style.icon} onClick={() => openModal(row.id)} className="fas fa-info-circle"></i>
      ),
    },
  ];
}

export default columns;
