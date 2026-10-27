# 🔐 Cadastro e Login

Sistema simples de **Cadastro e Login** criado para praticar **Tailwind CSS** e **JavaScript** em um projeto real, com validação de formulários e dados salvos no `localStorage`.

---

## 🎯 Sobre o projeto

A ideia é construir, passo a passo, duas telas (Cadastro e Login) com visual consistente, responsivas e com validação em cada campo. O foco é o aprendizado: cada etapa treina um conceito de estilização ou de lógica.

## ✅ Progresso

| Funcionalidade | Status |
|---|---|
| Tela de Login (layout responsivo + modo escuro) | ✅ Pronto |
| Validação do e-mail (obrigatório e formato) | ✅ Pronto |
| Campo de senha no Login | ⏳ A fazer |
| Tela de Cadastro | ⏳ A fazer |
| Salvar usuários no `localStorage` | ⏳ A fazer |
| Verificar credenciais no Login | ⏳ A fazer |
| Mensagens de sucesso e erro | ⏳ A fazer |

## 🛠️ Tecnologias

- **HTML5**
- **Tailwind CSS v4** (via CDN)
- **JavaScript** com módulos ES
- **JustValidate** para validação de formulários
- **LocalStorage**
- **Git e GitHub**

## 📁 Estrutura

```
projeto/
├── index.html
└── js/
    ├── main-login.js
    └── validators/
        └── login.js
```

## ▶️ Como rodar

Os módulos ES exigem um servidor local (não funcionam abrindo o arquivo direto).

**VS Code:** instale a extensão **Live Server** e clique em **Go Live**.

**Terminal:**
```bash
npx serve
```

## 🧪 Validações

**Login**
- E-mail obrigatório
- E-mail com formato válido

**Cadastro (planejado)**
- Nome, e-mail, senha e confirmação obrigatórios
- Senha com no mínimo 6 caracteres
- Senhas iguais
- E-mail ainda não cadastrado

## 🎨 Visual

- Cor principal: `teal`
- Neutros: `slate` e `neutral`
- Fonte: Plus Jakarta Sans
- Estados de `hover`, `focus` e `active` em inputs e botões

## ♿ Acessibilidade

Labels em todos os campos, placeholder com contraste adequado, mensagens de erro ligadas ao campo com `aria-describedby` e foco visível.

## 🧠 O que estou aprendendo

**Tailwind CSS:** classes utilitárias, Grid e Flexbox, responsividade, estados e dark mode.

**JavaScript:** DOM, eventos, validação, funções, arrays, objetos, módulos, `localStorage`, `JSON.stringify()` e `JSON.parse()`.

## ⚠️ Aviso

Projeto **didático**. Salvar senhas em texto puro no `localStorage` não é seguro. Em um sistema real, a autenticação é feita em um servidor, com senhas protegidas por hash.

## 📝 Commits

Padrão [Conventional Commits](https://www.conventionalcommits.org/): `feat`, `fix`, `style`, `refactor`, `docs` e `chore`.

Exemplo:
```bash
git commit -m "feat: add login screen with email validation"
```
