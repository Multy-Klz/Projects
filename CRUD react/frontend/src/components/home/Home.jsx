import React from "react";
import Main from '../templates/Main'

//Define the component of the "Home secsion"
export default props =>
        <Main icon="home" title="inicio"
            subtitle="Subtitulo">
            <div className="display-4">Introdução</div>
            <hr />
            <p className="mb-0">Este Projeto desenvolve um CRUD utilizando JSON-server para operar em cima de usuários (atributos de id, nome e email)</p>
        </Main>