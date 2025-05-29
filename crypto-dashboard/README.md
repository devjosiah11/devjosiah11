# Crypto Trading Dashboard

A comprehensive cryptocurrency trading dashboard built with React, TypeScript, and Tailwind CSS.

## Features

### 🏪 Market Overview
- Real-time cryptocurrency prices and market data
- Top 50 cryptocurrencies by market cap
- 24h price changes with visual indicators
- Market cap and volume information
- Auto-refreshing data every minute

### 🔍 Search Functionality
- Search for any cryptocurrency by name or symbol
- Detailed market information for search results
- Real-time price data integration

### 📝 Blog Section
- Cryptocurrency news and insights
- Educational articles about blockchain and DeFi
- Newsletter subscription functionality
- Reading time estimates

### 📊 Portfolio Tracking
- Track your cryptocurrency investments
- Real-time profit/loss calculations
- Portfolio allocation visualization
- Performance metrics and statistics

### 👤 User Profile
- Personal information management
- Notification preferences
- Security settings (2FA, password management)
- Account statistics and portfolio overview

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **API**: CoinGecko API for cryptocurrency data

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## API Integration

This application uses the [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data:
- Real-time price information
- Market capitalization data
- 24-hour volume and price changes
- Cryptocurrency search functionality

## Features in Detail

### Market Page
- Displays top 50 cryptocurrencies
- Sortable table with market data
- Real-time price updates
- Responsive design for mobile devices

### Search Page
- Search by cryptocurrency name or symbol
- Displays detailed results with market data
- Error handling for failed searches
- Loading states and user feedback

### Blog Page
- Sample cryptocurrency-related articles
- Newsletter subscription form
- Responsive card layout
- Reading time calculations

### Portfolio Page
- Track multiple cryptocurrency holdings
- Calculate profit/loss automatically
- Visual portfolio allocation
- Add/remove assets functionality

### Profile Page
- User account management
- Notification preferences
- Security settings
- Account statistics

## Project Structure

```
src/
├── components/           # Reusable UI components
│   └── Navigation.tsx   # Main navigation component
├── pages/               # Page components
│   ├── Market.tsx      # Market overview page
│   ├── Search.tsx      # Search functionality page
│   ├── Blog.tsx        # Blog/news page
│   ├── Portfolio.tsx   # Portfolio tracking page
│   └── Profile.tsx     # User profile page
├── services/           # API services
│   └── cryptoApi.ts    # CoinGecko API integration
├── types/              # TypeScript type definitions
│   └── crypto.ts       # Cryptocurrency-related types
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Responsive Design

The dashboard is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Unsplash](https://unsplash.com/) for stock images used in the blog section