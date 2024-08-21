# Sistema de Gerenciamento de Consultas

Pensando em um cenário onde você é o administrador de uma clínica e deseja cadastrar suas consultas, desenvolvi este sistema simples de gerenciamento como uma API RESTful. Ele permite o cadastro, visualização, atualização e exclusão de consultas em uma clínica.

## Funcionalidades

- **Cadastro de consultas**: Registre uma nova consulta 
- **Visualização de consultas**: Veja todas as consultas já realizadas
- **Visualização de uma única consulta**: Veja informações de uma determinada consulta 
- **Atualização da consulta**: Atualize o tipo da consulta ou valor de pagamento do paciente.
- **Exclusão de consulta**: Exclua uma consulta.

## Tecnologias Utilizadas

- **Node.js** com **Fastify**: Framework para construção da API.
- **Sqlite**: Banco de dados relacional leve, ideal para projetos pequenos e médios.
- **Zod**: Biblioteca para validação de esquemas e dados, útil para garantir que suas entradas estejam corretas antes de serem processadas pela API.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, ajudando a evitar erros e melhorar a manutenção do código.
- **Knex**: Um construtor de consultas SQL para Node.js, facilitando a interação com o banco de dados SQLite e a construção de queries SQL de forma programática.







https://github.com/user-attachments/assets/a856b163-530b-4a79-a74b-db1d14ae5a23





## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) 
- Uma ferramenta de teste de API, como [INSOMNIA](https://insomnia.rest/) ou [POSTMAN](https://www.postman.com/)


## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Jacksonnr/consultation-api.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o ambiente:

    Antes de iniciar o servidor, você pode precisar configurar variáveis de ambiente, como o banco de dados. Certifique-se de criar um arquivo .env com as configurações apropriadas. Um exemplo de arquivo .env pode ser:

    ```bash
    DATABASE_URL = './db/app.db'
    ```

4. Crie o banco de dados:

    ```bash
    npx knex migrate:latest
    ```

5. Inicie o servidor:

    ```bash
    npm run dev
    ```

6. Configure a ferramenta de testes de API para fazer requisições aos endpoints.



O servidor estará disponível em `http://localhost:3333`.

## Endpoints da API

### 1. Registro de Consulta

- **POST** `/register`
- **Descrição**: Registra uma nova consulta.
- **Corpo da Requisição**:

    ```json
    {
        "consultation_type": "tipo de consulta",
        "patient": "nome do paciente",
        "patient_telephone_number": "412305847",
        "payment_amount": 400
    }
    ```

- **Resposta**: 201 Created


### 2. Visualização de Consulta

- **GET** `/consultations`
- **Descrição**: Retorna os dados de todas as consultas já realizadas.
- **Corpo da Requisição**: (Não é necessário)
- **Resposta**: 200 OK

    ```json
    {
      "listConsultation": [
        {
        "consultation_id": 1,
        "consultation_type": "tipo de consulta",
        "patient": "nome do paciente",
        "patient_telephone_number": "412305847",
        "payment_amount": 400
       }
      ]
    }
    ```


### 3. Visualização de Consulta unica

- **GET** `/consultation/:id`
- **Descrição**: Retorna os dados de uma determinada consulta.
- **Corpo da Requisição**: (Não é necessário)
- **Resposta**: 200 OK

    ```json
    {
      "listConsultation": [
        {
        "consultation_id": 1,
        "consultation_type": "tipo de consulta",
        "patient": "nome do paciente",
        "patient_telephone_number": "412305847",
        "payment_amount": 400
       }
      ]
    }
    ```

### 4. Atualização de Consulta

- **PUT** `/consultation/:id`
- **Descrição**: Atualiza o tipo da consulta, o paciente e o valor de pagamento através do id da consulta.
- **Corpo da Requisição** (obrigatório passar o novo tipo da consulta e o novo valor):

    ```json
    {
        "consultation_type": "novo tipo de consulta",
        "payment_amount": 50
    }
    ```

- **Resposta**: 200 OK

### 5. Exclusão de Consulta

- **DELETE** `/consultation/:id`
- **Descrição**: Exclui uma consulta através do id.
- **Corpo da Requisição**: (Não é necessário)
- **Resposta**: 200 OK

## Contribuindo

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir issues e pull requests. Toda contribuição é bem-vinda!

