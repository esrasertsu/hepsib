import styled from "styled-components";

export const ModalWrapper = styled.section`
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  width: 600px;
  padding-bottom: 50px;
`;

export const ModalContent = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
`;

export const ModalTitle = styled.h1`
  font-size: 23px;
  color: ${({ theme }) => theme.textPrimary};
  margin-top: 40px;
`;

export const ModalParagraph = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ModalButtonWrapper = styled.div`
  margin-top: 50px;

  button:first-child {
    margin-bottom: 16px;
  }
`;
