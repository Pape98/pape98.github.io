import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import { ACTIONS } from './constants';
import { StoreContext } from './contexts';
import { Menu, Footer } from './components';
import Screens from './screens';
import { ROUTES } from './constants';

const initialState = {
  selectedProject: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_PROJECT:
      return { ...state, selectedProject: action.payload };
    case ACTIONS.DESELECT_PROJECT:
      return { ...state, selectedProject: {} };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <StoreContext.Provider value={{ state, dispatch }}>
        <Menu />
        <div id='mainContainer'>
          <Routes>
            <Route path={ROUTES.about} element={<Screens.About />} />
            <Route path={ROUTES.home} element={<Screens.Home />} />
            <Route path={ROUTES.projects} element={<Screens.Projects />} />
          </Routes>
        </div>
        <Footer />
      </StoreContext.Provider>
    </>
  );
};

export default App;
