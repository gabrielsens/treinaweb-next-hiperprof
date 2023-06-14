import PageTitle from "@components/data-display/PageTitle";
import { Box, Button, Card, TextField } from "@mui/material";
import { BoxButtons, ButtonRecAccount } from "@styles/pages/login.styles";

export default function LoginPage() {
  return (
    <Box sx={{ maxWidth: 'sm', mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <PageTitle title="Consultar minhas aulas"
        subtitle="Faça login para poder consultar as aulas"
      />
      <Card elevation={2} sx={{ gap: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4}}>
        <TextField
          label="Email"
          type="email"
          fullWidth
        />
        <TextField
          label="senha"
          type="password"
          fullWidth
        />
        <BoxButtons>
          <Button variant="contained" fullWidth>
            Acessar
          </Button>
          <ButtonRecAccount size="small" fullWidth>Não possui conta cadastre-se agora</ButtonRecAccount>
        </BoxButtons>
      </Card>
    </Box>
  );
}
