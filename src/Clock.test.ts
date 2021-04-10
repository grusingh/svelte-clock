import {render, fireEvent} from "@testing-library/svelte";
import '@testing-library/jest-dom';

jest.mock('./utils/date', () => ({
  getTime: jest.fn()
    .mockReturnValueOnce('01:01:01')
    .mockReturnValueOnce('01:01:02')
}));
import Clock from './Clock.svelte';
import {tick} from "svelte";

describe('Clock', function () {
  jest.useFakeTimers();

  test('should render', async () => {
    const component = render(Clock);
    const clock = component.getByTestId('clock');
    expect(clock).toHaveTextContent('01:01:01');

    jest.advanceTimersByTime(1000);
    await tick();

    expect(clock).toHaveTextContent('01:01:02');
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
});