import Layout from "../components/Layout"
import { useState } from "react"
import Table from '../components/Table'
import Client from '../core/Client'
import Button from "../components/Button"
import Form from "../components/Form"

export default function Home() {
 
  const [client, setClient] = useState<Client>(Client.vazio())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bio', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54,'4'),
  ]

  function selectedCliente(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function newClient() {
    setClient(Client.vazio())
    setVisible('form')
  }

  function deletedCliente(client: Client) {
    
  }

  function saveClient(client: Client) {
    setVisible('table')
  }


  return (
    <div className={` 
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
        <>
            <div className="flex justify-end">
              <Button className="mb-4 bg-gradient-to-r from-green-400 to-green-700" onClick={newClient}>Novo Cliente</Button>
            </div>
            <Table clients={clients} clienteSelecionado={selectedCliente}
              clienteExcluido={deletedCliente}/> 
        </>

        ): (
            <Form client={client}
              changedClient={saveClient}
              cancel={()=> setVisible('table')} />
            
        )}
      </Layout>
    </div>
  )
}
