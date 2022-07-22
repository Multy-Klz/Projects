import Layout from "../components/Layout"
import Table from '../components/Table'

import Button from "../components/Button"
import Form from "../components/Form"

import useClients from "../hooks/UseClients"

export default function Home() {

  const { client, clients, selectedCliente, deletedCliente, saveClient, tableVisible,  showTable, newClient} = useClients()

  return (
    <div className={` 
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
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
              cancel={()=> showTable} />
            
        )}
      </Layout>
    </div>
  )
}
