import styled from "styled-components"

export const CardContainer = styled.div`
  width: 26em;
  height: 16.25em;
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
`
export const IssueTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    color: ${props => props.theme["base-title"]};
  }

  span {
    display: inline-block;
    white-space: nowrap;
    font-size: 0.8rem;
    .time {
      color: ${props => props.theme["base-span"]};
    }
  }
`

export const IssueDescription = styled.div`
  color: ${props => props.theme["base-text"]};
`
