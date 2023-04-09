import * as C from "./styles"

export function SearchBar() {
  return (
    <C.SearchContainer>
      <h3>Publicações</h3>
      <input type="text" placeholder="Buscar conteúdo" />
    </C.SearchContainer>
  )
}
