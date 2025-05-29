import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import type { BlogPost } from '../types/crypto';

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding Bitcoin Halving: What It Means for Investors',
      excerpt: 'Bitcoin halving events occur approximately every four years and have historically had significant impacts on the cryptocurrency market. Learn what this means for your investment strategy.',
      content: 'Full article content would go here...',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1639389016237-85a2d4935981?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'DeFi vs Traditional Banking: A Comprehensive Comparison',
      excerpt: 'Decentralized Finance (DeFi) is revolutionizing the financial sector. Explore how DeFi protocols compare to traditional banking systems in terms of accessibility, security, and returns.',
      content: 'Full article content would go here...',
      date: '2024-01-12',
      author: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Top 5 Cryptocurrency Trends to Watch in 2024',
      excerpt: 'From institutional adoption to regulatory developments, discover the key trends that are shaping the cryptocurrency landscape this year.',
      content: 'Full article content would go here...',
      date: '2024-01-10',
      author: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'Security Best Practices for Cryptocurrency Holders',
      excerpt: 'Protecting your digital assets is crucial in the cryptocurrency space. Learn about hardware wallets, two-factor authentication, and other essential security measures.',
      content: 'Full article content would go here...',
      date: '2024-01-08',
      author: 'Emma Thompson',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'NFTs Beyond Art: Utility and Real-World Applications',
      excerpt: 'While NFTs gained popularity through digital art, their potential extends far beyond. Explore how NFTs are being used in gaming, real estate, and identity verification.',
      content: 'Full article content would go here...',
      date: '2024-01-05',
      author: 'David Park',
      image: 'https://images.unsplash.com/photo-1641580318181-c5b908c10dc3?w=800&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Ethereum 2.0: The Complete Guide to the Upgrade',
      excerpt: 'Ethereum\'s transition to Proof of Stake brings significant changes to the network. Understand the technical improvements, environmental benefits, and impact on ETH holders.',
      content: 'Full article content would go here...',
      date: '2024-01-03',
      author: 'Lisa Wang',
      image: 'https://images.unsplash.com/photo-1640826361253-8ba9d0415b65?w=800&h=400&fit=crop'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Crypto Blog</h1>
        <p className="text-gray-600">Stay updated with the latest cryptocurrency news, insights, and analysis</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{getReadingTime(post.content)} min read</span>
                </div>
              </div>
              
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest cryptocurrency news, market analysis, 
          and exclusive insights directly in your inbox.
        </p>
        
        <div className="max-w-md mx-auto flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;