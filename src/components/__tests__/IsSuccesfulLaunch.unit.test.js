import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LaunchYear from '../filter/LaunchYear';

describe('LaunchYear', () => {
    it('renders default Launch text', () => {
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' }
        render(<LaunchYear filter={filter}
            text="Successfull Launch" />
        );
        const launchText = screen.getByText('Luanch Year');
        expect(launchText).toBeInTheDocument();
    })
    it('toogle filter launch value on click', () => {
        const toggleSuccessFullSpy = jest.fn();
        const setFilterSpy = jest.fn();
        const filter = { selectedYear: '', successfullLaunch: '', successfullLanding: '' };
        render(<LaunchYear filter={filter}
            setFilter={setFilterSpy}
            toggleSuccessFull={toggleSuccessFullSpy} />);

        const button = screen.getByText('2015');
        fireEvent.click(button);

        expect(setFilterSpy).toHaveBeenCalledWith({
            selectedYear: '2015',
            successfullLaunch: '',
            successfullLanding: ''
        });

    });
});