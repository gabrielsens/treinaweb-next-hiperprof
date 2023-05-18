import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxContainsStyled, ImageStyled } from "./styles";
import { ProfessorInterface } from "@data/@types/professor";

interface ProfessorCardProps {
  professor: ProfessorInterface,
  onClick: (professor: ProfessorInterface) => void,
}

export default function ProfessorCard({ professor, onClick }: ProfessorCardProps) {
  return (
    <>
      <BoxAvatarStyled>
        {professor.foto_perfil ? (
          <ImageStyled src={professor.foto_perfil} alt=""/>
        ) : (
          <ImageStyled src={'/user.svg'} alt=""/>
        )}
      </BoxAvatarStyled>
    <BoxContainsStyled>
      <div className="text-container">
        <Typography variant="h6" className="descricao" paragraph>
          {professor.nome}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center"}}
          className="descricao"
          paragraph
        >
          {professor.descricao}
        </Typography>
      </div>
      <Button variant="outlined" color="inherit" onClick={() => onClick(professor)}>
        Ver detalhes
      </Button>
    </BoxContainsStyled>
    </>
  );
}
