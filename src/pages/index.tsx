import PageTitle from "@components/data-display/PageTitle";
import Link from "@components/navigation/Link";
import useIndex from "@data/hooks/pages/useIndex";
import { Button, Icon, TextField } from "@mui/material";
import { BoxButtons, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  const {
    search,
    setSearch,
    messageError,
    handleBuscarProfessor
  } = useIndex();

  return (
    <HomeContainer onSubmit={handleBuscarProfessor} noValidate>
      <Link href="teste">
        Teste
      </Link>
      <PageTitle
        title="Encontre o professor ideal para você!"
        subtitle="Pesquise pelo professor ideal para você!"
      />
      <TextField
        label="Encontre um professor"
        fullWidth
        error={!!messageError}
        helperText={messageError}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }} >search</Icon>
        }}
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mt: 3, mb: 3 }}
      />
      <BoxButtons>
        <Button type="submit" variant="contained">Buscar o professor</Button>
      </BoxButtons>
    </HomeContainer>
  )
}
