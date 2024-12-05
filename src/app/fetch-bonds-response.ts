export interface FetchBondsResponse {
  readonly data: {
    readonly svg: string;
    readonly items: readonly {
      readonly couponPercent: number; // Example: 2
      readonly dateMaturity: string; // Example: 'Aug 2035'
      readonly dateNextEx: string; // Example: '2025-02-12'
      readonly name: string; // Example: 'COMMONWEALTH OF AUSTRALIA..'
      readonly payFrequency: string; // Example: 'Quarterly'
      readonly paymentType: string; // Example: 'Indexed'
      readonly priceBid: number; // Example: 133.08
      readonly priceFiftyTwoWeekHigh: number; // Example: 140.772
      readonly priceFiftyTwoWeekLow: number; // Example: 130.223
      readonly priceLast: number; // Example: 134.54
      readonly priceValuation: number; // Example: 136.304
      readonly securityDescription: string; // Example: 'TREAS INDEXED BOND CPI+2.00% 21-08-35 QLY'
      readonly symbol: string; // Example: 'GSIO35'
      readonly statusCode: string; // Example: ''
      readonly volume: number; // Example: 0
      readonly xid: string; // Example: '67990234'
      readonly faceValue: number; // Example: 136.16
      readonly yieldPercent: string; // Example: ''
      readonly isNewAnnouncement: boolean; // Example: false
    }[];
  };
}
