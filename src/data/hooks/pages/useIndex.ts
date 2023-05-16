import { useRouter } from "next/router"
import { FormEvent, useState } from "react";

export default function useIndex() {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleBuscarProfessor(event: FormEvent) {
    event.preventDefault();

    if(search?.length > 3) {
      router.push('/pesquisa-professor');
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
