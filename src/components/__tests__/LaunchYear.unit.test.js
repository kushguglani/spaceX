import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IsSuccesfulLaunch from '../filter/IsSuccesfulLaunch';

describe('IsSuccesfulLaunch', () => {
    it('renders default Launch text', () => {
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' }
        render(<IsSuccesfulLaunch filter={filter}
            text="Successfull Launch" />
        );
        const launchText = screen.getByText('Successfull Launch');
        expect(launchText).toBeInTheDocument();
    })
    it('toogle filter launch value on click', () => {
        const toggleSuccessFullSpy = jest.fn();
        const setFilterSpy = jest.fn();
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' };
        render(<IsSuccesfulLaunch filter={filter}
            setFilter={setFilterSpy}
            toggleSuccessFull={toggleSuccessFullSpy} />);

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
});