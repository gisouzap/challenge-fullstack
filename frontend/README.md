# RoutEasy Frontend Challenge

Desafio feito pela empresa RoutEasy para o seu processo seletivo de desenvolvedores fullstack.

### Desenvolvido com:

- ReactJS
- LeafLet
- Google Geocode API

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
git clone https://github.com/gisellesouz/desafioVizir.git
```

Entre na pasta frontend:

```
cd frontend

```

Instale os módulos necessários pelo yarn:

```
yarn

```

Após todos os módulos instalados, digite:

```
yarn start

```

Feito isso, a aplicação deve abrir em um navegador usando o endereço localhost:3000.

### Melhorias futuras:

- Toast de sucesso / falha no cadastro de novos clientes
- Melhoramento da interface e disposição dos componentes
- Tratamento de erros
