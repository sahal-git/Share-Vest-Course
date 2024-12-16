import { Course } from './types';
import { Stock } from "@/lib/types";

export const courses: Course[] = [
    {
        id: 1,
        name: "Stock Market Basics",
        imageCode: "FINSsC9P50Y",
        imageUrl: "https://i.ytimg.com/vi/FINSsC9P50Y/maxresdefault.jpg",
        category: "Beginner",
        published: true,
        chapters: [
            { id: 1, title: "Stock Market Terminology", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Basics of Stock Investing", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Understanding Market Trends", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Types of Stocks", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Risk Management in Stocks", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Key Financial Metrics", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "How Stock Prices are Determined", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "Introduction to Stock Market", videoUrl: "https://vimeo.com/271741409" }
        ]
    },
    {
        id: 2,
        name: "Halal Investing Guide",
        imageCode: "jqY2URdUDso",
        imageUrl: "https://i.ytimg.com/vi/jqY2URdUDso/maxresdefault.jpg",
        category: "Portfolio",
        published: false,
        chapters: [
            { id: 1, title: "Screening Halal Stocks", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Ethical Considerations in Investing", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Halal Investment Options", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Shariah Principles in Finance", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Introduction to Halal Investing", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Halal Mutual Funds and ETFs", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "Building a Halal Portfolio", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "Risk Management in Halal Investing", videoUrl: "https://vimeo.com/271741409" }
        ]
    },
    {
        id: 3,
        name: "Ultimate Stock Market Course",
        imageCode: "Y3kzzE9Elns",
        imageUrl: "https://i.ytimg.com/vi/Y3kzzE9Elns/maxresdefault.jpg",
        category: "Advanced",
        enrolled: true,
        chapters: [
            { id: 1, title: "Stock Valuation Models", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Global Market Impact on Stocks", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Options Trading Strategies", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Earnings Report Analysis", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Understanding Financial Statements", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Sector Rotation Strategies", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "Advanced Stock Valuation Techniques", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "Algorithmic Trading Introduction", videoUrl: "https://vimeo.com/271741409" }
        ]
    },
    {
        id: 4,
        name: "Stock Market Basics",
        imageCode: "FINSsC9P50Y",
        imageUrl: "https://i.ytimg.com/vi/FINSsC9P50Y/maxresdefault.jpg",
        category: "Trading",
        chapters: [
            { id: 1, title: "Trading Psychology", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Common Trading Mistakes", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Risk Management in Trading", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Setting Up a Trading Account", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Technical Analysis Basics", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Types of Trading Strategies", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "Understanding Candlestick Charts", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "Introduction to Trading", videoUrl: "https://vimeo.com/271741409" }
        ]
    },
    {
        id: 5,
        name: "Ultimate Stock Market Course",
        imageCode: "Y3kzzE9Elns",
        imageUrl: "https://i.ytimg.com/vi/Y3kzzE9Elns/maxresdefault.jpg",
        category: "Beginner",
        chapters: [
            { id: 1, title: "Stock Market Fundamentals", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Preparing for Long-term Investing", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Introduction to Stock Indices", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Market Participants Overview", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Basics of Order Types", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Common Stock Investing Myths", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "Risks in Stock Market Investing", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "How to Open a Brokerage Account", videoUrl: "https://vimeo.com/271741409" }
        ]
    },
    {
        id: 6,
        name: "Halal Stock Investing",
        imageCode: "mZ5d604Wl4I",
        imageUrl: "https://i.ytimg.com/vi/mZ5d604Wl4I/maxresdefault.jpg",
        category: "Screening",
        enrolled: true,
        chapters: [
            { id: 1, title: "Sector-specific Screening", videoUrl: "https://vimeo.com/271741409" },
            { id: 2, title: "Screening for Dividend Stocks", videoUrl: "https://vimeo.com/271741409" },
            { id: 3, title: "Risk-based Screening", videoUrl: "https://vimeo.com/271741409" },
            { id: 4, title: "Growth vs Value Screening", videoUrl: "https://vimeo.com/271741409" },
            { id: 5, title: "Using Screening Tools", videoUrl: "https://vimeo.com/271741409" },
            { id: 6, title: "Key Screening Metrics", videoUrl: "https://vimeo.com/271741409" },
            { id: 7, title: "Introduction to Stock Screening", videoUrl: "https://vimeo.com/271741409" },
            { id: 8, title: "Developing Custom Screens", videoUrl: "https://vimeo.com/271741409" }
        ]
    }
];

export const stocks: Stock[] = [
  {
    id: 1,
    name: "Sun Pharma",
    full_name: "Sun Pharmaceutical Industries Ltd",
    industry: "Pharmaceuticals",
    description: "A leading Indian pharmaceutical company focusing on generic and specialty drugs, compliant with Shariah law.",
    financial_details: {
      debt_to_assets_ratio: "Low",
      non_compliant_income_ratio: "Below 5%",
      market_cap: "424,476.57 cr"
    },
    performance: {
      stock_performance: "Consistently strong",
      growth_potential: "High"
    },
    about: "Founded in 1983, committed to ethical business practices.",
    stock_link: "https://www.sunpharma.com",
    price: "1,050.45",
    status: "+0.100 (0.10%) today",
    Share_Vest_Featured: true,
    fundamentals: {
      profitMargin: "15.2%",
      operatingMargin: "18.5%",
      returnOnEquity: "22.4%",
      returnOnAssets: "12.8%",
      revenueGrowth: "25.6%",
      earningsGrowth: "18.9%",
      currentRatio: "2.1",
      quickRatio: "1.8",
      dividendYield: "1.5%",
      priceToBook: "4.2"
    }
  }
  // Add more stocks as needed
];