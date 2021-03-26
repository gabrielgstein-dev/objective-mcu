// Styles
import * as S from './styled';
import { ModalProps } from './contracts'
import { Item } from 'components/HeroItem/contracts'
const Modal = ({ closeModal, state }: ModalProps) => {
  const { visible, props } = state

  return (
    <S.StyleModal className={visible ? 'show' : ''}>
      <div>
        <div className="modal-content">

          <S.Close>
            <button type="button" onClick={closeModal}>
              X
            </button>
          </S.Close>
          <div className="modal-body">

            <S.Row>
              <S.TitleColumnImage>
                <S.Image src={`${props.thumbnail?.path}/portrait_xlarge.${props.thumbnail?.extension}`} />
              </S.TitleColumnImage>

              <S.TitleColumnName>
                <h2>
                  {props.name}
                </h2>

                <S.Row>
                  <S.Description>
                    {props.description || "Sem descrição no momento"}
                  </S.Description>
                </S.Row>
              </S.TitleColumnName>
            </S.Row>



            <S.DetailsContainer>
              <S.Row>
                <S.Subtitle>
                  <b>Séries</b>
                </S.Subtitle>
              </S.Row>
              <hr />
              <S.Row>
                <S.Column>
                  {props.series?.items.map(({ name }: Item) => <li key={name}>{name}</li>)}
                </S.Column>
              </S.Row>

              <S.Row>
                <S.Subtitle>
                  <b>Eventos</b>
                </S.Subtitle>
              </S.Row>
              <hr />
              <S.Row>
                <S.Column>
                  {props.events?.items.map(({ name }: Item) => <li key={name}>{name}</li>)}
                </S.Column>
              </S.Row>

              <S.Row>
                <S.Subtitle>
                  <b>Histórias</b>
                </S.Subtitle>
              </S.Row>
              <hr />
              <S.Row>
                <S.Column>
                  {props.stories?.items.map(({ name }: Item) => <li key={name}>{name}</li>)}
                </S.Column>
              </S.Row>

              <S.Row>
                <S.Subtitle>
                  <b>Quadrinhos</b>
                </S.Subtitle>
              </S.Row>
              <hr />
              <S.Row>
                <S.Column>
                  {props.comics?.items.map(({ name }: Item) => <li key={name}>{name}</li>)}
                </S.Column>
              </S.Row>
            </S.DetailsContainer>
          </div>
        </div>
      </div>
    </S.StyleModal>
  );
};

Modal.initialProps = {};

export default Modal;
export { Modal };
