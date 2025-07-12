# Payment System Frontend

## Overview
This React-based frontend application provides a user interface for a payment processing system. It includes a payment form for users to submit transactions and an admin dashboard to view the payment history.

## Features
- Payment form with input validation  
- Admin dashboard to view transaction history  
- Secure handling of credit card information  
- Real-time payment status updates  
- Integration with a Rails backend API

## Prerequisites
- Node.js (v16 or higher)  
- npm or yarn package manager  
- Modern web browser  
- Running backend API (see backend repository)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/isaaclvs/payment-system-frontend.git
cd payment-system-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the project root and add:
```ini
REACT_APP_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure
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

## Main Components

### Payment Form
Collects payment information:
- Cardholder name
- Card number
- Expiration date
- CVV
- Payment amount
- Implements form validation
- Displays transaction status and feedback

### Admin Dashboard
- Requires authentication
- Displays all transactions
- Shows transaction details:
  - Customer name
  - Last 4 digits of the card
  - Transaction amount
  - Payment status

## API Integration
The frontend communicates with the Rails backend through RESTful endpoints:
- `POST /api/payments` - Processes new payments
- `GET /api/payments` - Retrieves payment history (admin only)

## Security Considerations
- Credit card data is never stored locally
- HTTPS is required for all API communication
- Input validation in all forms
- JWT-based authentication for admin access

## Development

### Available Scripts
- `npm start` - Runs the development server
- `npm test` - Runs the test suite
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint for code linting


### Demonstração em Vídeo

Você pode ver uma demonstração completa da aplicação no seguinte link:

[Assistir a Demonstração](https://drive.google.com/file/d/1EXa4wx5F9-Es8hrHIGW3fg2dq98b_pA7/view?usp=sharing)

## Demo

### Application Screenshots

Here are some screenshots of the application:

![Payment Form](/src/assets/images/payment-form.png)  
*Payment Form Example*

![Admin Dashboard](/src/assets/images/view-admin.png)  
*Admin Dashboard Example*

![Login Screen](/src/assets/images/login.png)  
*Login Screen Example*

![Product View](/src/assets/images/view-product.png)  
*Product View Example*

### Video Demo

You can view a full demo of the application at the following link:

[Watch Demo](https://drive.google.com/file/d/1EXa4wx5F9-Es8hrHIGW3fg2dq98b_pA7/view?usp=sharing)

## Testing

### Testing Overview
The project uses Jest and React Testing Library to test components. The tests ensure key UI elements function correctly.

### Test Structure
```
src/
├── components/
│   ├── PaymentForm/
│   │   ├── index.js
│   │   └── PaymentForm.test.js
│   └── ...
```

### Implemented Tests

#### PaymentForm
- Renders the payment form
- Correctly displays the payment amount
- Renders the payment button

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

### Test Dependencies
- Jest
- @testing-library/react
- @testing-library/jest-dom

### Test Coverage
To check test coverage:
```bash
npm test -- --coverage
```

## License
This project is licensed under the MIT License – see the LICENSE file for details.
