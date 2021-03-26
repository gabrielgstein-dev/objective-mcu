import { useState } from 'react'
import * as S from './styled'

import { heroes } from 'services/mirror-api'

import { HeroItem, Input, Modal } from 'components'
import { HeroItem as HeroContract } from 'components/HeroItem/contracts'
import { ModalState } from 'components/Modal/contracts'

import { HomePageContract } from './contracts'

const modalInitialProps: ModalState = {
  visible: false,
  props: {}
}

const Home = ({ heroList, onFilterList }: HomePageContract) => {

  const [modalState, setModalState] = useState<ModalState>(modalInitialProps)

  const closeModal = () => setModalState(modalInitialProps)

  const getHeroId = async (id: number) => {
    const heroDetail = await heroes.getHeroesId(id)
    console.log(heroDetail)
    setModalState({
      visible: true,
      props: { ...heroDetail }
    })
  }

  return (
    <S.Wrapper>
      <Modal closeModal={closeModal} state={modalState} />
      <S.Header>
        <S.Title>
          Busca de personagens
        </S.Title>
        <S.Label>
          Nome do personagem
        </S.Label>
        <Input onFilterList={onFilterList} />
      </S.Header>
      <S.TitleUl>
        <S.TitleLi>Personagem</S.TitleLi>
        <S.TitleLi>Séries</S.TitleLi>
        <S.TitleLi>Eventos</S.TitleLi>
      </S.TitleUl>
      <S.BodyContainer>
        {heroList.map(({ id, thumbnail, name, series, events }: HeroContract) => (
          <S.BodyItem key={`${name}`}>
            <HeroItem id={id} thumbnail={thumbnail} name={name} series={series} events={events} getHeroId={getHeroId} />
          </S.BodyItem>
        ))}
      </S.BodyContainer>

    </S.Wrapper>
  )
}

export default Home
