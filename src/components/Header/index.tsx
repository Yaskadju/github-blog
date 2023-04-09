import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { ProfileCard } from "../ProfileCard"

export function Header() {
  return (
    <C.HeaderContainer>
      <C.Logo>
        <img src={logo} alt="" />
        <span>GITHUB BLOG</span>
      </C.Logo>
    </C.HeaderContainer>
  )
}
