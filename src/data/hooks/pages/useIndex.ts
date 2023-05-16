import { useRouter } from "next/router"
import { FormEvent, useState } from "react";
import { Router } from "@routes/routes";

export default function useIndex() {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleBuscarProfessor(event: FormEvent) {
    event.preventDefault();

    if(search?.length > 3) {
      Router.pesquisaProfessor.push(router, search);
    } else {
      setMessageError("Mínimo de três caracteres")
    }
  }

  return {
    search,
    setSearch,
    messageError,
    handleBuscarProfessor
  }
}
