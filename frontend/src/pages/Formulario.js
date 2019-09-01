import React from 'react';
import Main from './Main';
import './css/Formulario.css'

export default function Formulario() {
    return(
        <div className="container">
            <Main />
        <div className="Formulario-container"></div>
            <h2>Dados para Instalação</h2>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Insira o IP do seu servidor:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter IP"/>
                    <small id="emailHelp" class="form-text text-muted">Ip válido</small>
                </div>


                <div class="form-group">
                    <label for="exampleInputEmail1">Insira o Hostname desejado para o servidor:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Hostname"/>
                    <small id="emailHelp" class="form-text text-muted">hostaname válido</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Insira o nome da zona do dominio (Ex: EXEMPLO.COM.BR) :</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Zona"/>
                    <small id="emailHelp" class="form-text text-muted">Zona</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Insira o nome do dominio (Ex: EXEMPLO):</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Domínio"/>
                    <small id="emailHelp" class="form-text text-muted">Domínio</small>
                </div>

                <button type="submit" class="btn btn-primary">Instalar</button>
            </form>

        </div>
    );
}
