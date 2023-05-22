import { ProfessorInterface } from "@data/@types/professor";
import { apiService } from "@data/services/ApiService";
import { Router } from "@routes/routes";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function usePesquisaProfessor() {
  const router = useRouter();
  const [professores, setProfessores] = useState<ProfessorInterface[]>();
  const [timeOutRef, setTimeOutRef] = useState<NodeJS.Timeout>();

  useEffect(() => {
    apiService.get<ProfessorInterface[]>(`/api/professores?q=${router.query.search}`).then((res) => {
      const data = res.data;
      setProfessores(data);
    }).catch((error) => {
      console.error(error)
      setProfessores([]);
    });
  }, [router.query.search]);

  function handleSearch(value: string) {
    clearTimeout(timeOutRef)
    function handleSetQuery() {
      Router.pesquisaProfessor.push(router, value)
    }
    setTimeOutRef(setTimeout(() => {handleSetQuery()}, 1000))
  }

  function handleSelectProfessor(professor: ProfessorInterface) {
    sessionStorage.setItem('hiperprof_professor', JSON.stringify(professor));
    Router.detalheProfessor.push(router)
  }

  return {
    professores,
    handleSearch,
    handleSelectProfessor
  }
}
