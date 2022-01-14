# BuilderWeather

Este projeto tem o objetvo de demonstrar um pouco sobre meus conhecimentos em React Native.

![](https://raw.githubusercontent.com/rodrigomatosc/Weather/master/weather.gif)

## Features

- Recuperaçaão dos dados de localização do usuário
- Verificação se os dados de localização estão disponíveis
- Recuperação de dados através de uma API que recebe a localização e retorna dados Climáticos

## Tech

Neste projeto foram usadas as seguintes libs (Claro que não colocando as libs padrões nesta lista):

- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) - Foi usada para a recuperação dos dados de localização do telemóvel
- [react-native-permissions](https://github.com/zoontek/react-native-permissions) - Foi usada para verificar se a aplicação possuía permissões para acessar a localização
- [react-query](https://react-query.tanstack.com/) - Gerência toda parte de recuperação e cache dos dados que são solicitados da api
- [styled-components](https://styled-components.com/) - Facilita na criação dos estilos em React Native

## Installation

Para dar um start no projeto execute os seguinte comandos (Levando em consideração que todo ambiente React Native está configurado)

```sh
❯ yarn install
❯ cd ios/ && pod install && cd ..
❯ npx react-native start --reset-cache
❯ npx react-native run-ios
❯ npx react-native run-android
```

## Development

Nesta etapa vou descrever alguns passos da implementação deste projeto.

### Hooks

A primeira etapa do desenvolvimento foi para ver a melhor maneira de recuperar os dados de localização do usuário, foram desenvolvidos alguns hooks para controlarem esta parte.

| Hook                  | Arquivo                                    | Descrição                                                                   |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| useLocationPermission | [src/hooks/useLocationPermission.ts][pldb] | retorna se a aplicação possui ou não permissão para recuperar a localização |
| useGeolocation        | [src/hooks/useGeolocation.ts][plgh]        | retorna a localização                                                       |

### Pages

Após a localização, percebi que a aplicação necessitaria de somente uma page (Home), aqui eu uso uma arquitetura que divide cada page em 3 arquivos:

| Page           | Arquivo                                   | Descrição                                                                                                                                                                     |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home.view      | [src/pages/Home/Home.view.tsx][pldb]      | é encarregada de toda parte de visão, ela tem o trabalho de receber os dados do seu container e mostra-los de acordo com o design                                             |
| Home.container | [src/pages/Home/Home.container.tsx][plgh] | Cuida de todo tipo de dado que vai ser passado para a view, aqui são feitas desde requestes como uma filtragem dos dados                                                      |
| Home.screen    | [src/pages/Home/Home.screen.tsx][plgd]    | Cuida da navegação desta page, neste projeto não foi preciso, mas se no caso na Home tivesse algum tipo de chamada para outra página, é nesta camada que aconteceria a mágica |

Dentro de cada pasta que representa uma page há também os styles e índex

### Observações

- Utilizei o redux somente para guardar os dados se a aplicação estava buscando os dados ou não
- Algumas chaves como api-key nao deveriam estar no código como ai estão, como fiz o projeto muito rápido não achei que seria relevante agora
- Deveriam ser feitos testes, mas como foquei mais no layout, acabei gastando um tempinho a mais com isso
