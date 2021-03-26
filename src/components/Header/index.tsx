

import * as S from './styled'
import logo from 'styles/images/objective-logo.png'

const Header = () => (
  <S.Wrapper>
    <S.Img src={logo} alt="" />

    <S.RightInfo>
      <S.Name>Gabriel Stein</S.Name>
      <S.TestName>Teste de Front-end</S.TestName>
    </S.RightInfo>

    <S.Box>CB</S.Box>
  </S.Wrapper>
)

export default Header
