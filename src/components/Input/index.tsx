import React from 'react';
import { ReactComponent as SearchIcon } from 'styles/icons/search.svg';

import { InputComponent } from './contracts'

import * as S from './styled'

export const ClearableInput = ({ onFilterList }: InputComponent) => {

  return (
    <S.Container>
      <S.TextInput
        placeholder={'Search'}
        onChange={(event) => {
          onFilterList(event.target.value);
        }}
      />
      <S.Icon>
        <SearchIcon
          width="20px"
          height="20px"
        />
      </S.Icon>
    </S.Container>
  );
};

export default ClearableInput
