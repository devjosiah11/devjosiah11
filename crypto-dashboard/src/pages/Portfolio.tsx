import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';
import type { PortfolioItem } from '../types/crypto';

const Portfolio: React.FC = () => {
  const [portfolioItems] = useState<PortfolioItem[]>([
    {
      id: '1',
      cryptoId: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.5,
      purchasePrice: 35000,
      currentPrice: 43250,
      purchaseDate: '2024-01-01'
    },
    {
      id: '2',
      cryptoId: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 2.3,
      purchasePrice: 2200,
      currentPrice: 2650,
      purchaseDate: '2024-01-05'
    },
    {
      id: '3',
      cryptoId: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      amount: 1000,
      purchasePrice: 0.45,
      currentPrice: 0.52,
      purchaseDate: '2024-01-10'
    },
    {
      id: '4',
      cryptoId: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      amount: 15,
      purchasePrice: 85,
      currentPrice: 98,
      purchaseDate: '2024-01-15'
    }
  ]);

  const calculateProfitLoss = (item: PortfolioItem) => {
    const purchaseValue = item.amount * item.purchasePrice;
    const currentValue = item.amount * item.currentPrice;
    return {
      absolute: currentValue - purchaseValue,
      percentage: ((currentValue - purchaseValue) / purchaseValue) * 100,
      currentValue,
      purchaseValue
    };
  };

  const getTotalPortfolioValue = () => {
    return portfolioItems.reduce((total, item) => {
      return total + (item.amount * item.currentPrice);
    }, 0);
  };

  const getTotalProfitLoss = () => {
    return portfolioItems.reduce((total, item) => {
      const profit = calculateProfitLoss(item);
      return total + profit.absolute;
    }, 0);
  };

  const getTotalInvestment = () => {
    return portfolioItems.reduce((total, item) => {
      return total + (item.amount * item.purchasePrice);
    }, 0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const totalValue = getTotalPortfolioValue();
  const totalProfit = getTotalProfitLoss();
  const totalInvestment = getTotalInvestment();
  const totalProfitPercentage = (totalProfit / totalInvestment) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Portfolio</h1>
        <p className="text-gray-600">Track your cryptocurrency investments and performance</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total P&L</p>
              <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(totalProfit)}
              </p>
              <p className={`text-sm ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalProfitPercentage >= 0 ? '+' : ''}{totalProfitPercentage.toFixed(2)}%
              </p>
            </div>
            {totalProfit >= 0 ? (
              <TrendingUp className="h-8 w-8 text-green-600" />
            ) : (
              <TrendingDown className="h-8 w-8 text-red-600" />
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalInvestment)}</p>
            </div>
            <PieChart className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Add Asset Button */}
      <div className="mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Add Asset</span>
        </button>
      </div>

      {/* Portfolio Holdings */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Holdings</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Holdings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  P&L
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purchase Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portfolioItems.map((item) => {
                const profit = calculateProfitLoss(item);
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500 uppercase">{item.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.amount.toLocaleString()} {item.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(item.currentPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(profit.currentValue)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className={profit.absolute >= 0 ? 'text-green-600' : 'text-red-600'}>
                        <div className="font-medium">
                          {profit.absolute >= 0 ? '+' : ''}{formatCurrency(profit.absolute)}
                        </div>
                        <div className="text-xs">
                          {profit.percentage >= 0 ? '+' : ''}{profit.percentage.toFixed(2)}%
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(item.purchaseDate)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Allocation</h3>
        <div className="space-y-3">
          {portfolioItems.map((item) => {
            const currentValue = item.amount * item.currentPrice;
            const percentage = (currentValue / totalValue) * 100;
            return (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">({item.symbol})</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-600">{percentage.toFixed(1)}%</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;