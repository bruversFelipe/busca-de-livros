import React, { memo, useEffect } from 'react';


import { useDispatch } from 'react-redux';

import { actionsCreators } from './Redux';
import Header from './Components/Header';
import Card from './Components/Card';
import ListaLivros from './Containers/ListaLivros';

const { actionBooksSaga } = actionsCreators();

const style = {
  content: {
    padding: '24px',
  },
};

const App = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionBooksSaga());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div style={style.content}>
        <Card>
          <ListaLivros />
        </Card>
      </div>
    </div>
  );
});

export default App;
