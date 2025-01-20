export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          category: string;
          name: string;
          capacity: string;
          priceRegular: number;
          priceDiscount: number;
          color: string;
          images: string[];
          screen: string;
          resolution: string;
          processor: string;
          ram: string;
          camera?: string;
          zoom?: string;
          cell?: string[];
          year: number;
          capacityAvailable?: string[];
          colorsAvailable?: string[];
          description?: {
            title: string;
            text: string[];
          }[];
        };
        Insert: {
          id: string;
          category: string;
          name: string;
          capacity: string;
          priceRegular: number;
          priceDiscount: number;
          color: string;
          images: string[];
          screen: string;
          resolution: string;
          processor: string;
          ram: string;
          camera?: string;
          zoom?: string;
          cell?: string[];
          year: number;
          capacityAvailable?: string[];
          colorsAvailable?: string[];
          description?: {
            title: string;
            text: string[];
          }[];
        };
        Update: {
          id?: string;
          category?: string;
          name?: string;
          capacity?: string;
          priceRegular?: number;
          priceDiscount?: number;
          color?: string;
          images?: string[];
          screen?: string;
          resolution?: string;
          processor?: string;
          ram?: string;
          camera?: string;
          zoom?: string;
          cell?: string[];
          year?: number;
          capacityAvailable?: string[];
          colorsAvailable?: string[];
          description?: {
            title: string;
            text: string[];
          }[];
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          products: {
            id: string;
            name: string;
            price: number;
            quantity: number;
          }[];
          total_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          products: {
            id: string;
            name: string;
            price: number;
            quantity: number;
          }[];
          total_price: number;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
