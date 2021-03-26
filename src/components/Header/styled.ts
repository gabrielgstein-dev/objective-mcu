import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 10px;
  background-color: #fff
`

export const Img = styled.img`
  width: 130px;
  margin-left: 5px;

  @media screen and (max-width: 460px) {
    width: 85px;
    margin-left: 0px;
  }
`

export const RightInfo = styled.div`
  display: inline-flex;
  position: absolute;
  right: 4%;
  top: 2.2%;

  @media screen and (max-width: 460px) {
    display: block;
    right: 55px;
    top: 5px;
  }
`

export const Name = styled.div`
  font-weight: bold;
  padding-right: 5px;

  @media screen and (max-width: 460px) {
      font-size: 8pt;
    }
`

export const TestName = styled.div`
  @media screen and (max-width: 460px) {
      font-size: 8pt;
    }
`
export const Box = styled.div`
  background: #F5F5F5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: -7px;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  float: right;
  margin: auto;

  @media screen and (max-width: 460px) {
      margin: initial;
      margin-top: -4px;
    }
`


