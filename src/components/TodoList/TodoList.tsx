import { Center, Title, TextInput } from '@mantine/core';
import Todo from './components/TodoList/Todo';

export default function TodoList() {
  return (
    <Center>
      <Title order={1} >TODO</Title>

      <TextInput
        placeholder="Ma tâche à ajouter.."
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      
    </Center>
  );
}
