import { ProfessorInterface } from "@data/@types/professor";
import ProfessorCard from ".";
import { BoxCardItemStyled, ListStyled } from "./styles";

interface ListProfessorCardProps {
  professores: ProfessorInterface[];
  onClick: (professor: ProfessorInterface) => void,
}

export default function ListProfessorCard({ professores, onClick }: ListProfessorCardProps) {
  return (
    <ListStyled>
      {professores.map((professor) =>(
          <BoxCardItemStyled key={professor.id}>
            <ProfessorCard professor={professor} onClick={onClick} />
          </BoxCardItemStyled>
        ))}
    </ListStyled>
  );
}
