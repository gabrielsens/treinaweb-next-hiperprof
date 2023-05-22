import PageTitle from "@components/data-display/PageTitle";
import ListProfessorCard from "@components/data-display/ProfessorCard/ListProfessorCard";
import usePesquisaProfessor from "@data/hooks/pages/usePesquisaProfessor";
import { Container, Icon, TextField } from "@mui/material";

export default function PesquisaProfessorPage() {
  const { professores, handleSearch, handleSelectProfessor } = usePesquisaProfessor();
  return (
    <Container>
      <TextField
        fullWidth
        label="Encontre um professor"
        required
        onChange={(e) => handleSearch(e.target.value)}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
        }}
        sx={{ mt:3, mb: 1}}
      />

      <PageTitle
        title="Professores Enconstrados"
        subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com ele."
      />

      <ListProfessorCard professores={professores ?? []} onClick={(professor) => {handleSelectProfessor(professor)}} />
    </Container>
  )
}
