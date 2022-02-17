import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';
import OpenSign from '../OpenSign.js';

test('test to see if Open sign image has source to open image', () => {
  render(<App 
  />);
  const signImg = screen.getByAltText('sign');
  expect(signImg.src).toBe('http://localhost/sign-open.jpeg');
});


test('test to see if we pass isClosed as true, if the img source changes to closed', () => {
  render(<OpenSign 
    isClosed={true}
  />);
  const signImg = screen.getByAltText('sign');
  expect(signImg.src).toBe('http://localhost/sign-closed.jpeg');
});


test('test to see if we click Close Aquarium, if the img source changes to closed', () => {
  render(<App 
    // setClosed={}
  />);

  const signImg = screen.getByAltText('sign');
  const closeBtn = screen.getByText('Close Aquarium!');

  fireEvent.click(closeBtn);

  expect(signImg.src).toBe('http://localhost/sign-closed.jpeg');
});

