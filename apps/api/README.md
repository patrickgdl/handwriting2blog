# API de integração com Google Vision OCR

Código-fonte da API de integração com Google Vision OCR para envio de fotos para conversão em texto.

## Scripts para execução do projeto

Depois de realizar o clone do projeto é necessário a instalação dos pacotes necessários para a execução do projeto. Execute:

### `npm install`

Depois disso, no diretório do projeto, você pode executar:

### `npm start`

Executa a API no modo de desenvolvimento.

### `npm run serve`

Compila a API para produção e executa o servidor.

## Estrutura do Projeto

#### Estrutura da pasta principal/source `/src`:

    .
    ├── ...
    ├── src                  # Raíz principal do projeto
    │   ├── api              # Abriga a estrutura da API, com controladores e rotas
    │   ├── config           # Configurações comuns de variáveis de ambiente e conexão ao express
    │   └── index.js         # Arquivo de ponto de entrada da API (node)
    └── ...

#### Estrutura da pasta com os padrões em `/api`:

O projeto possui 6 tipos de arquivos:

- `controllers`: Esses métodos controladores obtêm a solicitação das rotas e as convertem em respostas HTTP com o uso de qualquer middleware conforme necessário.
- `routes`: Pasta com a estrutura da API.
- `utils`: Diretório que tem todos os utilitários e auxiliares necessários para a aplicação.
