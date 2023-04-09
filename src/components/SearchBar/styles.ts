import styled from "styled-components"

export const SearchContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`
