export interface VendorCateogryProductListParams {
  vendor_code: string;
  category_id: string;
  page: number;
  page_size: number;
  size: number;
  subcat_id?: number;
  client?: string;
  deviceType?: string;
  filters?: string[];
}

export interface FinalResult {
  data: Data;
  id: number;
  type: string;
}
interface Data {
  badges?: any;
  brand: string;
  brand_id: number;
  capacity?: number;
  comment_count: number;
  description: string;
  discount: number;
  discountRatio?: any;
  discount_ratio?: any;
  featured: string;
  highlight: string;
  id: number;
  images: Image[];
  isSubsIdy: boolean;
  is_ecommerce: boolean;
  is_market_party: boolean;
  menu_category_id: number;
  menu_category_title: string;
  no_stock: boolean;
  popularity_badge_Url: string;
  popularity_badge_url: string;
  price: number;
  rating: number;
  root_category_id: number;
  root_category_title: string;
  score: number;
  stock: number;
  title: string;
  type: string;
}
interface Image {
  main: string;
  position: number;
  thumb: string;
  type: string;
}
interface Extrasections {
  categories: Category[];
  filters: Filters;
}
export interface Filters {
  sections: Section[];
  top: Top;
}
interface Top {
  data: FilterDetail[];
}
export interface Section {
  data: FilterDetail[];
  section_name: string;
  section_name_fa: string;
}
export interface FilterDetail {
  image?: any;
  kind: string;
  selected: boolean;
  single_choice: boolean;
  title: string;
  value: string;
}
export interface Category {
  id: number;
  image: string;
  link: string;
  title: string;
}
interface Config {
  coverImage: string;
  coverRatio: number;
  hasCategoryFilter: boolean;
  hasSubCategoryFilter: boolean;
}

export interface VendorCateogryProductListResponse {
  config: Config;
  count: number;
  extra_sections: Extrasections;
  finalResult: FinalResult[];
}
