import Client from '../core/Client'
import { EditIcon, TrashIcon } from './icons'

interface TabelaProps { 
    clients: Client[]
    clienteSelecionado?: (client: Client) => void
    clienteExcluido?:(client: Client) => void
}


export default function Tabela(props: TabelaProps) {
    
    const showActions = props.clienteExcluido || props.clienteSelecionado

    function renderTable() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {showActions ? <th className='p-4'>Ações</th> : false}
            </tr>
        )
    }

    function renderActions(client: Client) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(client)} className={`
                    flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50
                    `}>
                        {EditIcon}
                    </button>
                ): false}
                
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(client)} className='flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50'>
                        {TrashIcon}
                    </button>
                ): false}


            </td>
        )
    }
    
    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                //define the key identifier for each row on table
                <tr key={client.id}
                    //alternate color on table rows
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{client.id}</td>
                    <td className='text-left p-4'>{client.nome}</td>
                    <td className='text-left p-4'>{client.idade}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800

            `}>
                {renderTable()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )    
}