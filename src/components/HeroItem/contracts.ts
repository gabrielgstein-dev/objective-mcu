export type HeroItem = {
  id: number;
  thumbnail: Thumbnail;
  name: string;
  description?: string;
  series: Content;
  events: Content;
  stories?: Content;
  comics?: Content;
  getHeroId?: (id: number) => Promise<void>
}

interface Content {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  name: string;
  resourceURI: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}
