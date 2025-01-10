import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const AdminPanel = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await api.get('/api/v1/payments');
        setPayments(response.data);
      } catch (error) {
        setError('Erro ao carregar pagamentos');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  return (
    <div>
      <h2>Histórico de Pagamentos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome do Titular</th>
            <th>Últimos 4 dígitos</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Gateway</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{formatDate(payment.created_at)}</td>
              <td>{payment.card_holder}</td>
              <td>{payment.last_four_digits || 'N/A'}</td>
              <td>{formatAmount(payment.amount)}</td>
              <td>
                <span style={{
                  color: payment.status === 'approved' ? 'green' : 'red'
                }}>
                  {payment.status}
                </span>
              </td>
              <td>{payment.gateway_used}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel; 