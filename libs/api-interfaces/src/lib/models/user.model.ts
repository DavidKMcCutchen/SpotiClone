export interface UserAPI {
  country: string;
  display_name: string;
  email: string;
  external_urls: Externalurls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
  product: string;
}

interface Image {
  height?: any;
  url: string;
  width?: any;
}

interface Followers {
  href?: any;
  total: number;
}

interface Externalurls {
  spotify: string;
}