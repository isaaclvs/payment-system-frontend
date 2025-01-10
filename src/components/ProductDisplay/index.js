import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = () => {
  const navigate = useNavigate();
  const product = {
    name: 'Nike Air Force 1',
    price: 100.00,
    description: 'O Nike Air Force 1 é um tênis clássico que combina estilo e conforto. Com sua silhueta icônica e design atemporal, é perfeito para qualquer ocasião.',
    images: [
      'https://imgnike-a.akamaihd.net/768x768/0116970P.jpg'
    ],
    details: [
      'Cor: Branco',
      'Material: Couro',
      'Solado: Borracha',
      'Tecnologia Air encapsulada',
      'Estilo clássico e versátil'
    ]
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Produto em Destaque</h2>
      </div>
      
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagem do Produto */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Detalhes</h3>
              <ul className="mt-2 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate('/payment')}
              className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200 flex items-center justify-center space-x-2"
            >
              <span>Comprar Agora</span>
              <span className="text-sm">(R$ {product.price.toFixed(2)})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay; 