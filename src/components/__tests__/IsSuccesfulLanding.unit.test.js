import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IsSuccesfulLanding from '../filter/IsSuccesfulLanding';

describe('IsSuccesfulLanding', () => {
    it('renders default Landing text', () => {
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' }
        render(<IsSuccesfulLanding filter={filter}
            text="Successfull Landing" />
        );
        const landingext = screen.getByText('Successfull Landing');
        expect(landingext).toBeInTheDocument();
    })
    it('toogle filter landing value on click', () => {
        const toggleSuccessFullSpy = jest.fn();
        const setFilterSpy = jest.fn();
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' };
        render(<IsSuccesfulLanding filter={filter}
            setFilter={setFilterSpy}
            toggleSuccessFull={toggleSuccessFullSpy} />);

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