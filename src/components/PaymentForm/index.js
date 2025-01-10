import React, { useState } from 'react';
import api from '../../services/api';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '100.00'
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/payments', formData);
      setStatus('Pagamento aprovado com sucesso!');
    } catch (error) {
      setStatus('Erro no pagamento. Por favor, tente novamente.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Realizar Pagamento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Titular:</label>
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número do Cartão:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data de Validade:</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Valor:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            disabled
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default PaymentForm; 