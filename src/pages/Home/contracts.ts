import { HeroItem } from 'components/HeroItem/contracts';

export interface HomePageContract {
  heroList: HeroItem[];
  onFilterList: (name: string) => void;
}
