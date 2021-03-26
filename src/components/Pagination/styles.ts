import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Ul = styled.ul`
  margin-bottom: 0;
  display: inline-flex;
  list-style: none;
`;

export const Li = styled.li`
  background: #F5F5F5 0% 0% no-repeat padding-box;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  margin: 7px;

  > a {
    color: #555555;
  }

  &.active {
    background: #167ABC 0% 0% no-repeat padding-box;
    border: 1px solid #167ABC;

    > a {
      color: #fff
    }
  }

  @media screen and (max-width: 460px) {
    margin: 5px;
  }
`;

export const ArrowLi = styled.li`
  margin: 7px;

  &.hidden {
    visibility: hidden;
  }

  > a {
    color: #555555;
  }

  @media screen and (max-width: 460px) {
    margin: 4px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 7px 17px;
  /* min-width: 3.5rem; */
  text-align: center;
  box-shadow: none;
  border-color: #ced4da;
  font-weight: 900;
  font-size: 1rem;
  display: block;

  @media screen and (max-width: 460px) {
    padding: 4px 9px;
  }
`;

export const ArrowLink = styled.a`
  text-decoration: none;
  padding: 7px 17px;
  /* min-width: 3.5rem; */
  text-align: center;
  box-shadow: none;
  border-color: #ced4da;
  font-weight: 900;
  font-size: 1rem;
  display: block;

  @media screen and (max-width: 460px) {
    padding: 4px 3px;
  }
`;
