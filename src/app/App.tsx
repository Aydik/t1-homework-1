import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'app/router/AppRouter.tsx';
import { Provider } from 'react-redux';
import { store } from 'app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/t1-homework-1">
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
