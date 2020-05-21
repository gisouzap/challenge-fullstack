# RoutEasy BackEnd Challenge

Desafio feito pela empresa RoutEasy para o seu processo seletivo de desenvolvedores fullstack.

### Desenvolvido com:

- NodeJs
- Express
- MongoDB

### Pré-requisitos

Para iniciar o projeto é preciso ter o yarn instalado em sua máquina.
Os exemplos abaixo são para usuários Linux.

#### Instalação

Em seu terminal, insira os comandos abaixo para adicionar o repositório do yarn:

```
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

```

Depois de feito isso, atualize e instale o yarn:

```
sudo apt update && sudo apt install yarn
```

Agora é hora de dar git clone!
Crie uma pasta e navegue até ela, pelo terminal, insira:

```
git clone git@github.com:gisouzap/challenge-fullstack.git
```

Entre na pasta frontend:

```
cd backend

```

Instale os módulos necessários pelo yarn:

```
yarn

```

Após todos os módulos instalados, digite:

```
yarn start

```

Feito isso, a aplicação deve rodar na porta 3001.
