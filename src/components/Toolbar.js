import styled from "styled-components";

export const Toolbar = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  padding: 0 10px;
  border-radius: 5px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  font-weight: 500;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .emoji {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
