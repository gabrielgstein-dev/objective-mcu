import styled from 'styled-components'

export const Wrapper = styled.ul`
  border: 0;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 5px;
  display: flex;
  height: 85px;
  background-color: #fff;

  @media screen and (max-width: 460px) {
    height: 60px;
  }
`
export const Img = styled.img`
  width: 65px;
  vertical-align: middle;
  height: 65px;
  border-radius: 5px;

  @media screen and (max-width: 460px) {
    width: 50px;
    height: 50px;
  }
`

export const Ul = styled.ul`
  list-style: none;
  width: 100%
`

export const Li = styled.li`
  list-style: none;
  width: 30%;
  margin: auto;

  span {
    margin-left: 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 460px) {
    &:nth-child(n+1):nth-child(n+2) {
      display: none
    }

    list-style: none;
    width: 100%;
    margin: auto 0;
    padding: 0 16px;

    & >span {
      font-size: 9pt;
      font-weight: bold;
    }
  }
`


