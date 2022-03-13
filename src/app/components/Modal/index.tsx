import { FC, ReactNode, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { RootStoreContext } from 'src/app/stores/rootStore';
import { observer } from 'mobx-react-lite';

interface ModalProps {
  className?: string;
  children?: ReactNode;
}
const ModalWrapper = styled.div`
    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -4px;
    }
    
    &.open{
     display:block;
     position: fixed;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     background: aliceblue;
     z-index: 10;
     margin: auto;
     padding: 16px;
     background-color: ${({ theme }) => theme.backgroundColor};
     border-radius: 16px;
     width: 600px;
     padding-bottom: 50px;
     border: 1px solid blue;
     pointer-events: auto;
     opacity: 1;
     transition: all 300ms ease-in-out;
    }
    &.closed{
      opacity: 0;
      pointer-events: none;
      transition: opacity 250ms 700ms ease-in-out;

    }
`;

const Modal: FC<ModalProps> = ({
  className = '',
  ...rest
}) => {

  const rootStore = useContext(RootStoreContext);
  const { modal: {open, body }, closeModal } = rootStore.modalStore;

  return (
    <ModalWrapper className={open === true ? "open" :"closed" + " " +className} {...rest}>
      {body}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default observer(Modal);

