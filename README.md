# Sistema de Pagamentos Frontend

## Visão Geral
Esta aplicação frontend baseada em React fornece uma interface de usuário para um sistema de processamento de pagamentos. Apresenta um formulário de pagamento para os usuários enviarem transações e um painel administrativo para visualizar o histórico de pagamentos.

## Funcionalidades
- Interface de processamento de pagamentos com validação de formulário
- Painel administrativo para histórico de transações
- Manipulação segura de informações de cartão de crédito
- Atualizações em tempo real do status do pagamento
- Integração com API backend Rails

## Pré-requisitos
- Node.js (v16 ou superior)
- Gerenciador de pacotes npm ou yarn
- Navegador web moderno
- API Backend em execução (ver repositório backend)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/isaaclvs/payment-system-frontend.git
cd payment-system-frontend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` no diretório raiz e adicione:
```
REACT_APP_API_URL=http://localhost:3000
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

## Estrutura do Projeto
```
src/
├── components/
│   ├── PaymentForm/
│   ├── AdminDashboard/
│   └── common/
├── contexts/
│   └── AuthContext/
├── hooks/
│   └── usePayment/
├── services/
│   └── api/
├── utils/
└── App.js
```

## Componentes Principais

### Formulário de Pagamento
- Coleta informações de pagamento:
  - Nome do titular do cartão
  - Número do cartão
  - Data de validade
  - CVV
  - Valor do pagamento
- Implementa validação de formulário
- Exibe status da transação e feedback

### Painel Administrativo
- Requer autenticação
- Exibe todas as transações
- Mostra detalhes da transação:
  - Nome do cliente
  - Últimos 4 dígitos do cartão
  - Valor da transação
  - Status do pagamento

## Integração com API

O frontend se comunica com o backend Rails através de endpoints RESTful:

- POST `/api/payments` - Processa novos pagamentos
- GET `/api/payments` - Recupera histórico de pagamentos (somente admin)

## Considerações de Segurança
- Dados do cartão de crédito nunca são armazenados localmente
- HTTPS obrigatório para todas as comunicações com a API
- Validação de entrada em todos os formulários
- Autenticação baseada em JWT para acesso administrativo

## Desenvolvimento

### Scripts Disponíveis
- `npm start` - Inicia servidor de desenvolvimento
- `npm test` - Executa suite de testes
- `npm run build` - Cria build de produção
- `npm run lint` - Executa ESLint

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes