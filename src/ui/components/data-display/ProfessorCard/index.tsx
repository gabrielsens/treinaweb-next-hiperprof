import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxCardStyled, BoxContainsStyled, ImageStyled } from "./styles";

export default function ProfessorCard() {
  return (
    <BoxCardStyled>
      <BoxAvatarStyled>
        <ImageStyled src="https://github.com/gabrielsens.png" />
      </BoxAvatarStyled>
    <BoxContainsStyled>
      <div className="text-container">
        <Typography variant="h6" className="descricao" paragraph>
          nome
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center"}}
          className="descricao"
          paragraph
        >
          descrticao Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta nisi aut fugiat quos, ad at quis beatae, modi possimus tenetur aliquam doloremque rerum officia sapiente unde eligendi? Voluptas, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab enim suscipit illo quos tempore deleniti facilis, beatae repellendus commodi voluptatum earum vero minima! Et molestias, dignissimos hic sit similique blanditiis!
        </Typography>
      </div>
      <Button variant="outlined" color="inherit">
        Ver detalhes
      </Button>
    </BoxContainsStyled>
    </BoxCardStyled>
  );
}
