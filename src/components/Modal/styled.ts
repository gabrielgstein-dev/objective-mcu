import styled from 'styled-components';
import Styled from 'styled-components';

export const StyleModal = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0;
  transition: all .8s linear;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(30 30 30 / 55%);
    transition: all .8s linear;
  }

  > div {
    width: auto;
    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    height: 100%;

    > .modal-content {
      display: flex;
      position: relative;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      width: 60%;
      margin: 0 auto;
      /* max-width: 600px; */

      &.smaller-box {
        max-width: 464px;
      }

      > .modal-body {
        padding: 2rem;
        margin: auto;
        font-family: Avenir;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        width: 100%;
        flex-direction: column;
        text-align: left;

        > p {
          > b {
            margin-right: 10%
          }
        }

        @media screen and (max-width: 460px) {
          padding: 1rem;
        }
      }

      @media screen and (max-width: 460px) {
        width: 95%;

      }
    }
  }

  &.show {
    opacity: 1;
    display: block;
    transition: all .8s linear;
  }
`;

export const Close = Styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;

  > button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }
`;

export const DetailsContainer = styled.div`
  max-height: 300px;
  overflow: auto;
  padding: 10px;
  border-radius: 10px;
  background: #E5E5E5 0% 0% no-repeat padding-box;
`

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 460px) {
    display: block;
  }
`;

export const TitleColumnImage = styled.div`
  display: inline;
  width: 20%;

  @media screen and (max-width: 460px) {
    width: 100%;
    display: flex;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 460px) {
    margin: auto;
    width: 100px;
  }
`;

export const TitleColumnName = styled.div`
  display: inline;
  width: 70%;
  text-align: justify;

  @media screen and (max-width: 460px) {
    text-align: center;
    margin: 15px 0;

    > h2 {
      font-size: 14pt
    }
  }

`;
export const Description = styled.p`
  padding: 20px 10px 0 30px;

  @media screen and (max-width: 460px) {
    padding: 10px 0;
  }
`;


export const Column = styled.ul`
  display: inline;
  width: 100%;

  > li {
    display: inline-block;
    width: 50%;
    padding: 5px;

    @media screen and (max-width: 460px) {
      display: block;
      width: 100%;
      font-size: 10pt;
      padding: 2px;
    }
  }

  @media screen and (max-width: 460px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.div`
  display: inline;
  width: 100%;
  padding: 10px
`;
