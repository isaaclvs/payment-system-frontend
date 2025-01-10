import React, { useState } from 'react';
import api from '../../services/api';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    card_holder: '',
    card_number: '',
    expiry_date: '',
    cvv: '',
    amount: '100.0'
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/v1/payments', {
        payment: formData
      });
      
      setStatus({ 
        type: 'success', 
        message: 'Pagamento processado com sucesso!' 
      });
      
      // Clear Form
      setFormData({
        card_holder: '',
        card_number: '',
        expiry_date: '',
        cvv: '',
        amount: '100.0'
      });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Falha no processamento do pagamento' 
      });
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Detalhes do Pagamento</h2>
      </div>
      
      <div className="p-6">
        {status.message && (
          <div className={`mb-4 p-4 rounded-md ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              id="cpf"
              type="text"
              placeholder="123.456.789-00"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              required
              maxLength="14"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="card_holder" className="block text-sm font-medium text-gray-700">
              Nome do Titular
            </label>
            <input
              id="card_holder"
              type="text"
              placeholder="João da Silva"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.card_holder}
              onChange={(e) => setFormData({...formData, card_holder: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">
              Número do Cartão
            </label>
            <input
              id="card_number"
              type="text"
              placeholder="4111 1111 1111 1111"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.card_number}
              onChange={(e) => setFormData({...formData, card_number: e.target.value})}
              required
              maxLength="19"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">
                Data de Validade
              </label>
              <input
                id="expiry_date"
                type="text"
                placeholder="MM/AA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.expiry_date}
                onChange={(e) => setFormData({...formData, expiry_date: e.target.value})}
                required
                maxLength="5"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.cvv}
                onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                required
                maxLength="4"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Valor
            </label>
            <input
              id="amount"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              value={`R$ ${formData.amount}`}
              disabled
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200"
          >
            Pagar Agora
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm; 