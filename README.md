Em construção...

Instalação de Pacotes

1- Inicie um projeto Next.js com o comando:

```bash
npx create-next-app@latest ./
```
 2- Instalar o Shadcn UI, escolher template e componentes, execute:

```bash
npx shadcn-ui@latest init

npx shadcn-ui@latest add 

```
3- Instalar o react-hook-form, execute:
(Para usar formulários com validação)

```bash
npm add react-hook-form
```	

4- Instalar o next-auth, execute:
(Para autenticação de usuários, tem ótima performance )

```bash
npm add next-auth@beta
```

5- Instalar o prisma, execute:
(Para manipulação de banco de dados)

```bash
npm add prisma --dev

npx prisma init

npm exec prisma migrate dev --name init

npm add @auth/prisma-adapter
```


*** Para rodar o projeto, execute: ***

```bash
npm run dev
```	