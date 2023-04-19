import { MantineProvider, Text } from '@mantine/core';
import  TodoList  from './components/TodoList/TodoList';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
      <TodoList />
    </MantineProvider>
  );
}
export default App;