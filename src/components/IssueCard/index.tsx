import * as C from "./styles"

export function IssueCard() {
  return (
    <C.CardContainer>
      <C.IssueTitle>
        <h3>Javascript data types and data structures</h3>
        <span className="time">Há 1 dia</span>
      </C.IssueTitle>
      <C.IssueDescription></C.IssueDescription>
    </C.CardContainer>
  )
}
