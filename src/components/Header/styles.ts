import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${props => props.theme["base-profile"]};
  height: 18.5rem;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 4rem;
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 2.8rem;
    height: 2.5rem;
  }

  span {
    color: ${props => props.theme["blue"]};
    font-size: 1.5rem;
  }
`
