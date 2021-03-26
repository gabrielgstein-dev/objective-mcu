import { HeroItem } from 'components/HeroItem/contracts'

export interface ModalProps {
  closeModal: (event: React.MouseEvent<HTMLElement>) => void;
  state: ModalState;
}

type State = {
  props: HeroItem;
  visible: boolean;
}

type InitialProps = {
  visible: boolean;
  props: Record<string, undefined>;
}

export type ModalState = State | InitialProps;
