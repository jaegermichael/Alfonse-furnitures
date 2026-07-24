export type CollectionCategory =
  | "All"
  | "Kitchens"
  | "Wardrobes"
  | "TV Units"
  | "Office Furniture"
  | "Bedroom Furniture"
  | "Dining Furniture"
  | "Reception Furniture"
  | "Custom Cabinets";

export interface Product {
  id: string;
  name: string;
  category: CollectionCategory;
  collectionName: string;
  priceEstimate: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  dimensions: string;
  materialsAvailable: string[];
  features: string[];
  leadTime: string;
  isFeatured?: boolean;
  isCustomizable?: boolean;
  hotspots?: { x: number; y: number; label: string; detail: string }[];
}

export interface CollectionInfo {
  title: string;
  category: CollectionCategory;
  subtitle: string;
  description: string;
  heroImage: string;
  itemCount: number;
  keyFeatures: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: CollectionCategory | "Commercial" | "Whole Home";
  location: string;
  year: string;
  mainImage: string;
  gallery: string[];
  clientVision: string;
  craftsmanshipDetails: string;
  materialsUsed: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface MaterialSwatch {
  id: string;
  name: string;
  category: "Wood" | "Marble & Stone" | "Metals" | "Glass & Finishes" | "Leather & Fabrics";
  textureUrl: string;
  description: string;
  idealFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  estimatedDuration: string;
  image: string;
}

export interface QuoteBasketItem {
  product: Product;
  selectedMaterial: string;
  customDimensions?: string;
  quantity: number;
  customNotes?: string;
}

export interface AiConsultationResult {
  styleTitle: string;
  conceptOverview: string;
  furniturePieces: {
    name: string;
    material: string;
    dimensions: string;
    keyFeature: string;
  }[];
  colorPalette: string[];
  layoutStrategy: string;
  estimatedLeadTime: string;
  estimatedPriceRange: string;
}
