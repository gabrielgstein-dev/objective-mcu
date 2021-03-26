import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 0;
  border-radius: 5px;

  width: 25vw;
  background-color: #fff;

  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #8E8E8E;
  }
`;

export const Icon = styled.div`
  flex: 0 0;
  margin-right: 20px;
`;
