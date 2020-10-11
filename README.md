# sky-api

## Introdução

Sky-API é uma aplicação que controla acessos de usuários. contém funcionalidades de cadastramento e controle de autenticação de usuários. Esse documento compreende desde sua instalação até o modelo de suas requisições.

## Pré-requisitos para funcionamento da API

Nodejs version 12+: 
https://nodejs.org/en/download/

Git version 2: 
https://git-scm.com/downloads

## Instalação para Desenvolvimento

No terminal CMD, acessando o diretório desejado acione o comando: git clone https://github.com/RafaeloDuarte/sky-api.git
No mesmo terminal acesse a pasta criada ‘sky-api’ com o comando: cd sky-api
Em seguida comando ‘npm install’ ou ‘yarn add’ para criar a pasta node_modules e instalar todas as dependências necessárias.
Coloque o servidor no ar com o comando ‘npm start’ ou ‘yarn run start’.

## Arquitetura das requisições

* ### Cadastro de Usuário

Verbo POST no endereço host/v1/api/usuarios/register
O corpo da requisição deve estar em formato json.
Deve ter as chaves e valores nessa formação:

``` json
{
    "email": "email@email.com",
    "password": "senha",
    "nome": "Nome"
}
```

A resposta da requisição será os dados cadastrados e o token de autenticação para que o usuário já esteja logado e possa usufruir dos serviços:

``` json
{
    "usuario": {
        "_id": "5ebee5f728cf1d2af8da62a8",
        "nome": "Jorge 5",
        "email": "email@9email.com",
        "token": "secrettoken.secrettoken.secrettoken"
    }
}
```

* ### Login

Para Login o verbo é POST e a url é host/v1/api/usuarios/login
O corpo da requisição deve estar em formato x-www-form-urlencoded
Deve ter as chaves e valores nessa formação:

``` json
{
    "email": "email@email.com",
    "password": "senha"
}
```

A resposta da requisição será preenchida com os dados cadastrados e o token de autenticação.
``` json
{
    "usuario": {
        "_id": "5ebee5f728cf1d2af8da62a8",
        "nome": "Jorge 5",
        "email": "email@9email.com",
        "token": "secrettoken.secrettoken.secrettoken"
    }
}
```

* ### Update

Para qualquer alteração dos dados de usuário é necessário estar logado ou seja passar o token gerado no login na head da requisição:
 
O verbo usado será PUT e a requisição deve ser feita para host/v1/api/usuarios.

A resposta será com os dados alterados e um novo token. 

* ### Delete

Somente o próprio usuário poderá deletar seu cadastro, sendo assim deverá estar registrado para que seja possível deletar.
O verbo para tal é DELETE e o caminho da requisição é host/v1/api/usuarios

## Configuração

O arquivo de configuração do banco de dados deve ser em formato json e se localizar na pasta config no arquivo database.json, seguindo este formato:

### config/database.json
```json
{
    "dbTest":"url-de-conexão-teste",
    "dbProd":"url-de-conexão"
}
```
As variáveis de produção no arquivo .env deverão ser:

PORT - Referenciar a porta onde a aplicação ficará hospedada dentro do servidor
SECRET - Definir o token de criptografia de senha, este deverá conter uma string separada por dois pontos ".", ex.: WDAD.ASFSA.FSDFGFG
