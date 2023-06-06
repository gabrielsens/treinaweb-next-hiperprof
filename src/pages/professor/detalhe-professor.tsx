import Fetch from "@components/data-display/Fetch";
import PageTitle from "@components/data-display/PageTitle";
import ListProfessorCard from "@components/data-display/ProfessorCard/ListProfessorCard";
import Dialog from "@components/feedack/Dialog";
import useDetalheProfessor from "@data/hooks/pages/professor/useDetalheProfessor";
import { TextFormatService } from "@data/services/TextFormatService";
import {
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  BoxCardProfessor,
  BoxDescription,
  BoxImage,
} from "@styles/pages/professor/detalhe-professor-styles";

import InputMask from "react-input-mask";

export default function DetalheProfessorPage() {
  const {
    professor,
    professoresRelacionados,
    selecionarProfessor,
    openDialog,
    setOpenDialog,
    setAluno,
    handleSubmit,
    snackMessage,
    setSnackMessage,
    alunoErro,
    setAlunoErro,
  } = useDetalheProfessor();
  return (
    <Container>
      <PageTitle
        title="Detalhes do professor"
        subtitle="Veja os detalhes do professor e verifiquer se ele é o ideal para você se candidatar a uma aula!"
      />

      <BoxCardProfessor>
        <BoxImage foto={professor?.foto_perfil} />
        <BoxDescription>
          <div className="box_esquerda">
            <Typography variant="h6">{professor?.nome}</Typography>
            <Typography
              className="descricao"
              paragraph
              variant="body2"
              sx={{ my: 2 }}
            >
              {professor?.descricao}
            </Typography>
          </div>
          <div className="box_direita">
            <Typography variant="body2" sx={{ my: 2 }}>
              Preço Hora/Aula
            </Typography>
            <Typography variant="h4" paragraph>
              {TextFormatService.currency(professor?.valor_hora ?? "")}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpenDialog(true)}
            >
              Contratar
            </Button>
          </div>
        </BoxDescription>
      </BoxCardProfessor>
      <Typography variant="body2" color="grey" sx={{ my: 10 }}>
        {professor?.descricao}
      </Typography>

      <Fetch
        data={professoresRelacionados?.filter(
          (prof) => prof.id !== professor?.id
        )}
        render={(prof) => (
          <>
            <PageTitle
              title="Outros professores sugeridos"
              color="primary.light"
            />
            <ListProfessorCard
              professores={prof}
              onClick={(professor) => selecionarProfessor(professor)}
            />
          </>
        )}
        maxLength={3}
      />

      <Dialog
        open={openDialog}
        title="Preencha suas informações"
        onConfirm={handleSubmit}
        onClose={() => {
          setOpenDialog(false);
          setAlunoErro({
            nome: "",
            data_aula: "",
            email: "",
          });
        }}
      >
        <TextField
          label="Seu nome"
          fullWidth
          sx={{ mb: 1, mt: 1 }}
          onChange={(event) =>
            setAluno((prevState) => ({
              ...prevState,
              nome: event.target.value,
            }))
          }
          error={!!alunoErro?.nome}
          helperText={alunoErro?.nome}
        />
        <TextField
          label="Seu email"
          type="email"
          sx={{ mb: 1, mt: 1 }}
          fullWidth
          onChange={(event) =>
            setAluno((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
          error={!!alunoErro?.email}
          helperText={alunoErro?.email}
        />
        <InputMask
          mask={"99/99/9999 99:99"}
          onChange={(event: any) =>
            setAluno((prevState) => ({
              ...prevState,
              data_aula: event.target.value,
            }))
          }
        >
          {() => (
            <TextField
              label="Horário da aula"
              fullWidth
              sx={{ mb: 1, mt: 1 }}
              error={!!alunoErro?.data_aula}
              helperText={alunoErro?.data_aula as string}
            />
          )}
        </InputMask>
      </Dialog>
      <Snackbar
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={4000}
        onClose={() => {
          setSnackMessage("");
        }}
      />
    </Container>
  );
}
