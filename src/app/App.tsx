import { TaskProvider } from 'app/context/TaskContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'app/router/AppRouter.tsx';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
