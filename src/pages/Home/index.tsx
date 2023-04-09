import { IssueCard } from "../../components/IssueCard"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchBar } from "../../components/SearchBar"
import * as C from "./styles"

export function Home() {
  return (
    <C.HomeContainer>
      <ProfileCard />
      <SearchBar />
      <C.CardsContainer>
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </C.CardsContainer>
    </C.HomeContainer>
  )
}
