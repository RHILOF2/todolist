import TodoList from './components/TodoList/TodoList';
import Info from './components/Info/Info';
import Todo from './components/TodoList/Todo';
import { Card, Center } from '@mantine/core';

export default function App() {
  return (
    <>
    <Center>
      <Card shadow="sm" padding="lg" radius="md" maw={800} mx="auto" withBorder>
        <TodoList />
        <Todo />
        <Info />
      </Card>
    </Center>
      
    </>
  );
}
