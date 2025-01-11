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

## Demonstração

### Imagens da Aplicação

Aqui estão algumas capturas de tela da aplicação:

![Formulário de Pagamento](/src/assets/images/payment-form.png)  
*Exemplo do Formulário de Pagamento*

![Painel Administrativo](/src/assets/images/view-admin.png)  
*Exemplo do Painel Administrativo*

![Tela de Login](/src/assets/images/login.png)  
*Exemplo do Tela de Login*

![Produto](/src/assets/images/view-product.png)  
*Exemplo de Produto*

### Demonstração em Vídeo

Você pode ver uma demonstração completa da aplicação no seguinte link:

[Assistir a Demonstração](https://drive.google.com/file/d/1EXa4wx5F9-Es8hrHIGW3fg2dq98b_pA7/view?usp=sharing)

## Testes

### Visão Geral dos Testes
O projeto utiliza Jest e React Testing Library para testes de componentes. Os testes focam em garantir que os elementos principais da interface do usuário estejam funcionando corretamente.

### Estrutura de Testes
```
src/
├── components/
│   ├── PaymentForm/
│   │   ├── index.js
│   │   └── PaymentForm.test.js
│   └── ...
```

### Testes Implementados
- **PaymentForm**
  - Renderização do formulário de pagamento
  - Exibição correta do valor
  - Presença do botão de pagamento

### Executando os Testes
```bash
# Executa todos os testes
npm test

# Executa testes em modo watch
npm test -- --watch
```

### Dependências de Teste
- Jest
- @testing-library/react
- @testing-library/jest-dom

### Cobertura de Testes
Para verificar a cobertura de testes do projeto:
```bash
npm test -- --coverage
```

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes