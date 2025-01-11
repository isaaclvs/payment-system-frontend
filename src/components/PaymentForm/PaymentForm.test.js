import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentForm from './index';

// Simple mock for the API service
jest.mock('../../services/api', () => ({
  post: jest.fn()
}));

describe('PaymentForm', () => {
  // Test if component renders correctly
  it('renders the payment form', () => {
    render(<PaymentForm />);
    
    // Check if main elements are present in the document
    expect(screen.getByText('Detalhes do Pagamento')).toBeInTheDocument();
    expect(screen.getByText('CPF')).toBeInTheDocument();
    expect(screen.getByText('Pagar Agora')).toBeInTheDocument();
  });

  // Test if the fixed amount is displayed correctly
  it('shows the correct amount', () => {
    render(<PaymentForm />);
    
    const amountInput = screen.getByDisplayValue('R$ 100.0');
    expect(amountInput).toBeInTheDocument();
  });

  // Test if payment button exists in the document
  it('has a payment button', () => {
    render(<PaymentForm />);
    
    const payButton = screen.getByText('Pagar Agora');
    expect(payButton).toBeInTheDocument();
  });
});