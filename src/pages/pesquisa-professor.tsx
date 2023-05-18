import PageTitle from "@components/data-display/PageTitle";
import ProfessorCard from "@components/data-display/ProfessorCard";
import ListProfessorCard from "@components/data-display/ProfessorCard/ListProfessorCard";
import { Icon, TextField } from "@mui/material";

export default function PesquisaProfessorPage() {
  return (
    <>
      <TextField
        fullWidth
        label="Encontre um professor"
        required
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
        }}
        sx={{ mt:3, mb: 1}}
      />

      <PageTitle
        title="Professores Enconstrados"
        subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com ele."
      />

      <ListProfessorCard professores={[1, 2, 3, 4, 5, 6]} onClick={(professor) => {}} />
    </>
  )
}
