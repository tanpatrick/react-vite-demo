import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('Should decrease counter', async () => {
    const component = render(<Counter initialCount={2} />);
    fireEvent.click(component.getByText('Decrement'));
    expect(component.getByTestId('count').textContent).toBe('Count is 1');
  });

  it('Should increase counter', () => {
    const component = render(<Counter initialCount={1} />);
    fireEvent.click(component.getByText('Increment'));
    expect(component.getByTestId('count').textContent).toBe('Count is 2');
  });
});
