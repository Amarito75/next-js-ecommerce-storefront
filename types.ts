export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  price: string;
  name: string;
  isFeatured: boolean;
  media: Media;
  image: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Media {
  id: string;
  name: string;
  value: string;
}
