import axios from 'axios';
import type { CryptoCurrency } from '../types/crypto';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const cryptoApi = {
  async getTopCryptocurrencies(limit: number = 100): Promise<CryptoCurrency[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: limit,
          page: 1,
          sparkline: false,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cryptocurrencies:', error);
      return [];
    }
  },

  async searchCryptocurrencies(query: string): Promise<CryptoCurrency[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: { query },
      });
      
      if (response.data.coins.length === 0) {
        return [];
      }

      const coinIds = response.data.coins.slice(0, 10).map((coin: any) => coin.id).join(',');
      const detailsResponse = await axios.get(`${API_BASE_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          ids: coinIds,
          order: 'market_cap_desc',
          sparkline: false,
        },
      });
      
      return detailsResponse.data;
    } catch (error) {
      console.error('Error searching cryptocurrencies:', error);
      return [];
    }
  },

  async getCryptocurrencyById(id: string): Promise<CryptoCurrency | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          ids: id,
          sparkline: false,
        },
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching cryptocurrency details:', error);
      return null;
    }
  },
};