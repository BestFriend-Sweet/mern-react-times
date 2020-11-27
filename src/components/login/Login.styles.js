import styled from 'styled-components';

export const LoginContainer = styled.div `
  grid-column: 3 / 4;
  /* grid-row: 2 / 5; */
  border: 1px solid white;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 40px;
  }

  input {
    margin: 20px 0;
    outline: none;
    background: white;
    color: black;
    padding: 11px 5px;
    font-size: var(--size-section-header);
    font-family: var(--font-text);
    border: none;

    &::placeholder {
      color: black;
    }
  }

  button {
    margin: 20px 0;
    border: none;
    background: white;
    color: black;
    font-family: var(--font-text);
    font-size: var(--size-section-header);
    font-weight: bold;
    padding: 11px 0;
    width: 50%;
    cursor: pointer;
    text-transform: uppercase;
  }
`;