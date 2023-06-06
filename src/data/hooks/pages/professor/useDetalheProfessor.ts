import { AlunoErrorResponse, AlunoInterface } from "@data/@types/alunos";
import { ResponseErroInterface } from "@data/@types/axiosResponse";
import { ProfessorInterface } from "@data/@types/professor";
import { apiService } from "@data/services/ApiService";
import { BrowserService } from "@data/services/BrowserService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function useDetalheProfessor() {
  const router = useRouter();

  const [snackMessage, setSnackMessage] = useState('');
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [aluno, setAluno] = useState<AlunoInterface>({
    nome: '',
    data_aula: '',
    email: ''
  })
  const [alunoErro, setAlunoErro] = useState<AlunoErrorResponse>();
  const [professor, setProfessor] = useState<ProfessorInterface>();
  const [professoresRelacionados, setProfessoresreslacionados] = useState<ProfessorInterface[]>();

  useEffect(() => {
    const data = sessionStorage.getItem('hiperprof_professor');

    if (data) {
      setProfessor(JSON.parse(data));
      getProfessores();
    } else {
      Router.home.push(router);
    }

    return () => {
      sessionStorage.removeItem('hiperprof_professor')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getProfessores() {
    await apiService.get(`/api/professores?q=${router?.query?.search ?? ''}`)
    .then(({ data }) => {
      return setProfessoresreslacionados(data)
    })
    .catch((error) => {
      setProfessoresreslacionados([])
      console.log(error);
    })
  }

  function selecionarProfessor(professor: ProfessorInterface) {
    setProfessor(professor)
    sessionStorage.setItem('hiperprof_professor', JSON.stringify(professor))
    BrowserService.scrollToTop();
  }

  function handleSubmit() {
    const newData: AlunoInterface = {
      ...aluno,
      data_aula: formatDataToJson(aluno.data_aula as string)
    }
    apiService.post(`/api/professores/${professor!.id}/alunos`, newData)
      .then(() => {
        setOpenDialog(false);
        setAluno({
          nome: '',
          data_aula: '',
          email: ''
        });
        setSnackMessage('Agendado com sucesso!');
      }).catch(({ response }: AxiosError<ResponseErroInterface<AlunoErrorResponse>>) => {
        if (response) {
          setAlunoErro(response.data.errors);
          setSnackMessage(response.data.message);
        }
      })
  }

  function formatDataToJson(data: string): Date {
    const [_data, tempo] = data.split(' ');
    const [dia, mes, ano] = _data.split('/');
    const [hora, minuto] = tempo?.split(':') ?? [];

    const newDate = new Date(`${mes} ${dia} ${ano} ${hora}:${minuto} UTC`)
    return newDate;
  }

  return {
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
    setAlunoErro
  }
}
