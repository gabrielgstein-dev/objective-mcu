

import * as S from './styled'

import { HeroItem as Interface, Item } from './contracts'


const HeroItem = ({ id, thumbnail, name, series, events, getHeroId }: Interface) => (
  <S.Wrapper onClick={() => getHeroId!(id)}>
    <S.Li>
      <S.Img src={`${thumbnail.path}/standard_large.${thumbnail.extension}`} alt="" height='140px' width='140px' />
      <span>{name}</span>
    </S.Li>
    <S.Li>
      {series.items.slice(0, 3).map(({ name }: Item) => <div key={name}>{name}</div>)}
    </S.Li>
    <S.Li>
      {events?.items.slice(0, 3).map(({ name }: Item) => <div key={name}>{name}</div>)}
    </S.Li>
  </S.Wrapper>
)

export default HeroItem
