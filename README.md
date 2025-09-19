# 🎓 Projeto Angular: Gerador de certificado

🧑‍💻 Este projeto, faz parte do curso introdutório de Angular da Rocketseat, com 10h de duração.

## ⚙️ Tecnologias Utilizadas
- Angular CLI v20
- Node v22
- HTML
- CSS
- TypeScript
- Figma
- Netlify


## 🖌️ Figma do projeto:
[Acesse o Figma do projeto](https://www.figma.com/pt-br/comunidade/file/1508905005736436009/gestao-de-certificados)


## 💻 Link da aplicação no Netlify 
[Acesse o projeto em produção](https://geradorcertificadomalchika.netlify.app)


## 🗂️ Estrutura do projeto
<img width="477" height="502" alt="image" src="https://github.com/user-attachments/assets/829b2d2f-0714-4acb-9776-1a8f7546648b" />

- **dist**: pasta criada ao ser feito deploy com NetliFy.
    - Para fazer o deploy, primeiro cria-se o arquivo netlify.toml
    - Depois, abra um terminal na raiz do projeto, e cole o que foi colocado no command, dentro do netlify.toml
    - Com isso, será criada a pasta 'dist' no projeto, a qual será utilizada pro deploy, pois contem todo o projeto dentro do package browser.
- **public**: contém as imagens que serão usadas
- **src**: contém todos os componentes criados que são usados na aplicação. Está seguindo um padrão adaptado, modular e funcional para a simplicidade do projeto.

## Adicionais
Tomei a liberdade de incluir uma funcionalidade não abordada no curso, o botão "Limpar lista".

<img width="986" height="415" alt="image" src="https://github.com/user-attachments/assets/da50c99d-d2c4-4553-a3d2-0cb0c324ea48" />




# GeradorCertificado

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
