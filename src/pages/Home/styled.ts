import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-bottom: 20px;
  margin: 0 113px 0 113px;

  @media screen and (max-width: 460px) {
    margin: 0 24px 0 24px;
  }
`

export const Container = styled.div`
  overflow: auto;
  max-height: 50vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;

  @media screen and (max-width: 460px) {
    margin: 0;
    padding: 0;

    & > h2 {
      font-size: 20pt;
      text-align: center;
      margin-top: 10px;
    }

    & > h3 {
      font-size: 14pt;
      text-align: center;
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 322px) {
    & > h2 {
      font-size: 14pt;
      text-align: center;
      margin-top: 10px;
    }

    & > h3 {
      font-size: 10pt;
      text-align: center;
      margin-top: 5px;
    }
  }
`

export const Title = styled.h2`
  color: #555555;
`

export const Label = styled.h3`
  color: #555555;
`

export const BodyContainer = styled.div`
  margin: 1px
`

export const BodyItem = styled.div`
  margin: 0 0 15px 0;

  @media screen and (max-width: 460px) {
    margin: 0 0 8px 0;
  }
`

export const TitleUl = styled.ul`
  width: 100%;
  display: inline-flex;
  list-style: none;
  padding: 10px 0 10px 30px;

  @media screen and (max-width: 460px) {
    padding: 10px 0 10px 85px;
  }
`

export const TitleLi = styled.li`
  width: 34%;

  @media screen and (max-width: 460px) {
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
  }
`
