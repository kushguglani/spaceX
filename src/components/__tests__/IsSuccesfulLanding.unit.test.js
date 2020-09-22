import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IsSuccesfulFilter from '../filter/IsSuccesfulFilter';

describe('IsSuccesfulFilter', () => {
  it('renders default Landing text', () => {
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: ''
    };
    render(<IsSuccesfulFilter filter={filter} text="Successfull Landing" />);
    const landingext = screen.getByText('Successfull Landing');
    expect(landingext).toBeInTheDocument();
  });
  it('toogle filter landing value on click', () => {
    const toggleSuccessFullSpy = jest.fn();
    const setFilterSpy = jest.fn();
    const setDisplaySpinner = jest.fn();
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: ''
    };
    render(
      <IsSuccesfulFilter
        filter={filter}
        setFilter={setFilterSpy}
        toggleSuccessFull={toggleSuccessFullSpy}
        type="successfullLaunch"
        setDisplaySpinner={setDisplaySpinner}
      />
    );

    const button = screen.getByText('True');
    const buttonFalse = screen.getByText('False');
    fireEvent.click(button);

    expect(setFilterSpy).toHaveBeenCalledWith({
      selectedYear: '',
      successfullLaunch: true,
      successfullLanding: ''
    });
    fireEvent.click(buttonFalse);
    expect(setFilterSpy).toHaveBeenCalledWith({
      selectedYear: '',
      successfullLaunch: false,
      successfullLanding: ''
    });
  });
  it('toogle filter landing value on click', () => {
    const toggleSuccessFullSpy = jest.fn();
    const setFilterSpy = jest.fn();
    const setDisplaySpinner = jest.fn();
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: ''
    };
    render(
      <IsSuccesfulFilter
        filter={filter}
        setFilter={setFilterSpy}
        toggleSuccessFull={toggleSuccessFullSpy}
        type="successfullLanding"
        setDisplaySpinner={setDisplaySpinner}
      />
    );

    const button = screen.getByText('True');
    const buttonFalse = screen.getByText('False');
    fireEvent.click(button);

    expect(setFilterSpy).toHaveBeenCalledWith({
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: true
    });
    fireEvent.click(buttonFalse);
    expect(setFilterSpy).toHaveBeenCalledWith({
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: false
    });
  });
});
