import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Nome do Sistema */}
            <div className="flex items-center">
              <h1 
                className="text-xl font-bold text-gray-900 cursor-pointer"
                onClick={() => navigate('/')}
              >
                Sistema de Pagamentos
              </h1>
            </div>

            {/* Navegação */}
            <nav className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  {/* Links de Navegação */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => navigate('/')}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === '/'
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Pagamento
                    </button>
                    
                    {userData.role === 'admin' && (
                      <button
                        onClick={() => navigate('/admin')}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          location.pathname === '/admin'
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        Admin
                      </button>
                    )}
                  </div>

                  {/* Perfil e Logout */}
                  <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
                    <span className="text-sm text-gray-700">
                      Olá, {userData.email}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      Sair
                    </button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout; 