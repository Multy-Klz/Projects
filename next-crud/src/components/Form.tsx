import Client from '../core/Client'
import Input from './Input'
import { useState } from 'react'
import Button from './Button'
interface FormProps{
    client: Client
    cancel?: () => void
    changedClient?: (client: Client) => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    text='Código'
                    value={id}
                    className='mb-4'
                />
            ) : false}
            
            <Input
                text='Nome'
                value={nome}
                className='mb-4'
                onChange={setNome}
            />
                
            <Input
                text='Idade'
                type='number'
                value={idade}
                onChange={setIdade} />
            
            <div className='flex justify-end mt-7'>
                <Button className="mr-2 bg-gradient-to-r from-blue-400 to-blue-700"
                onClick={() => props.changedClient?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button className="bg-gradient-to-r from-gray-400 to-gray-700"
                onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}