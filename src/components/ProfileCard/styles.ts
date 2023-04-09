import styled from "styled-components"

export const ProfileContainer = styled.div`
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 13.25rem;
  width: 54rem;

  padding: 2rem 2.5rem;

  display: flex;

  h2 {
    color: ${props => props.theme["base-title"]};
  }
`
export const Avatar = styled.div`
  padding-right: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoBlock = styled.div`
  display: flex;
  gap: 2rem;

  span {
    color: ${props => props.theme["base-text"]};
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
