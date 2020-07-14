import React, { memo, useCallback, useEffect, useState, lazy } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Table from '../../Components/Table';
import Modal from '../../Components/UI/Modal';
import Input from '../../Components/UI/Input';
import Loading from '../../Components/Loading';

import { actionsCreators } from '../../Redux';

import columns from './columns';

const Detalhes = lazy(() => import('./Detalhes'));


const { actionBooksSaga } = actionsCreators();

const style = {
  h1: {
    fontSize: '18px',
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
    fontWeight: '400',
  },
  search: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '15px',
  },
  input: {
    width: '250px',
  },
  footerTable: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#ddd',
    padding: '15px'
  }
}

const initialState = {
  data: [],
  visible: false,
};

const ListaLivros = memo(() => {
  const dispatch = useDispatch();
  const { loading, dataSource, livroDetalhes } = useSelector((state) => state);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(prevState => ({ ...prevState, data: dataSource.items }))
  }, [setState, dataSource]);

  const changeInput = useCallback((evt) => {
    const { value } = evt.target;
    let newData = [];
    newData = state.data.filter(item => item.titulo.toUpperCase() === value.toUpperCase() || item.isbn === value || item.autor.toUpperCase() === value.toUpperCase());
    if (value === '') {
      newData = dataSource.items;
    }

    setState(prevState => ({ ...prevState, data: newData }))

  }, [state.data]);

  const openModal = useCallback((id) => {
    dispatch(actionBooksSaga(id));
    setState(prevState => ({ ...prevState, visible: true }))
  }, []);

  const closeModal = useCallback(() => {
    setState(prevState => ({ ...prevState, visible: false }))
  }, []);

  return (
    <Loading loading={loading}>
      <h1 style={style.h1}>Conheça nossos <strong>Livros</strong></h1>
      <div style={style.search}>
        <Input onChange={changeInput} placeholder="Pesquise por ISBN, Nome ou Autor" style={style.input} />
      </div>
      {state.data && state.data.length > 0 && (
        <Table columns={columns(openModal)} dataSource={state.data} />
      )}
      <div style={style.footerTable}>
        <span>Total de Livros: <strong>{dataSource.totalCount}</strong></span>
      </div>
      <Modal visible={state.visible} onCancel={closeModal} title="Detalhes">
        <React.Suspense fallback={<Loading loading />}>
          <Detalhes livroDetalhes={livroDetalhes} />
        </React.Suspense>
      </Modal>
    </Loading>
  );
});

export default ListaLivros;
