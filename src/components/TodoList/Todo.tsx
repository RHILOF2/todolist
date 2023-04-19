import { Checkbox, CloseButton, Group } from '@mantine/core';

export default function Todo() {
  return (
    <Group position="center">
        <Checkbox
        label="I agree to sell my privacy"
        color="green"
        radius="lg"
        size="md"
        />
      <CloseButton title="Close popover" size="xl" iconSize={20} />    

      <Checkbox
        label="I agree to sell my privacy"
        color="green"
        radius="lg"
        size="md"
        />
      <CloseButton title="Close popover" size="xl" iconSize={20} />   

      <Checkbox
        label="I agree to sell my privacy"
        color="green"
        radius="lg"
        size="md"
        />
      <CloseButton title="Close popover" size="xl" iconSize={20} />   

      <Checkbox
        label="I agree to sell my privacy"
        color="green"
        radius="lg"
        size="md"
        />
      <CloseButton title="Close popover" size="xl" iconSize={20} />   
    </Group>
    
    
  );
}