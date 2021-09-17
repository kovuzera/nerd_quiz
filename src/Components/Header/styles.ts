import styled from "styled-components";

export const Overall = styled.div`
  background-color: var(--background);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;

  h1 {
    user-select: none;
    font-size: 5rem;
  }
`;
export const Content = styled.div`
  max-width: 1120px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
  }
  label {
      margin-left:1rem;
  }
`;
