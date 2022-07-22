import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/Colletion"
import Client from "../core/Client"
import ClientRepo from "../core/ClientRepo"
import useTableOrForm from "./useTableOrForm"

export default function useClients(){
      const repo: ClientRepo = new ClientCollection()
 
  const [client, setClient] = useState<Client>(Client.vazio())
    const [clients, setClients] = useState<Client[]>([])

    const {tableVisible,  showForm, showTable} = useTableOrForm()

  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
    
  }

  function selectedCliente(client: Client) {
    setClient(client)
   showForm()
  }

  function newClient() {
    setClient(Client.vazio())
    showForm()
  }

  async function deletedCliente(client: Client) {
        await repo.delete(client)
    getAll()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
    }
    
    return {
        client,
        clients,
        saveClient,
        newClient,
        deletedCliente,
        selectedCliente,
        getAll,
        showTable,
        tableVisible,
    }

}