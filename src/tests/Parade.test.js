import { fireEvent, render, screen } from '@testing-library/react';
import Parade from '../Parade.js';
import App from '../App.js';

test('test to see if we pass in an array of animal names if the emojis will be rendered', () => {
  render(<Parade 
    parade={['crab', 'crab', 'squid', 'dolphin', 'crab', 'crab']}
  />);
  const paradeEl = screen.getByTitle('parade-container');
  expect(paradeEl.textContent).toBe('🦀🦀🦑🐬🦀🦀');
});


test('test to see if we click seal if seal emoji show sup in parade', () => {
  render(<App 
    // parade={['']}
  />);
  const paradeEl = screen.getByTitle('parade-container');
  const addSealBtn = screen.getByText('Add Seal');

  fireEvent.click(addSealBtn);
  fireEvent.click(addSealBtn);

  expect(paradeEl.textContent).toBe('🦀🦀🦑🐬🦀🦀🦭🦭');
});


test('test to see if we click multiple things if correct emojis show up', () => {
  render(<App 
    // parade={['']}
  />);
  const paradeEl = screen.getByTitle('parade-container');
  const addSealBtn = screen.getByText('Add Seal');
  const addLobsterBtn = screen.getByText('Add Lobster');
  const addPufferBtn = screen.getByText('Add Puffer');
  const addSharkBtn = screen.getByText('Add Shark');

  fireEvent.click(addSealBtn);
  fireEvent.click(addLobsterBtn);
  fireEvent.click(addPufferBtn);
  fireEvent.click(addSharkBtn);

  expect(paradeEl.textContent).toBe('🦀🦀🦑🐬🦀🦀🦭🦞🐡🦈');
});
