import * as C from "./styles"
import { FaGithub, FaBuilding, FaUsers } from "react-icons/fa"

export function ProfileCard() {
  return (
    <C.ProfileContainer>
      <C.Avatar>
        <img src="" alt="" />
      </C.Avatar>

      <C.Summary>
        <h2>Cameron Dias</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum amet asperiores veritatis? Fugit earum a sint minima quaerat. Sed laboriosam, natus asperiores nesciunt cupiditate voluptatibus distinctio quia earum at?</p>

        <C.InfoBlock>
          <C.Info>
            <FaGithub />
            <span>cameronwll</span>
          </C.Info>
          <C.Info>
            <FaBuilding />
            <span>rocketseat</span>
          </C.Info>
          <C.Info>
            <FaUsers />
            <span>32 seguidores</span>
          </C.Info>
        </C.InfoBlock>
      </C.Summary>
    </C.ProfileContainer>
  )
}
