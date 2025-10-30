# 🔐 Text Encryptor

Um **encriptador visual** desenvolvido com **React + Vite**, criado inicialmente para **treinar lógica de programação**, mas que evoluiu para um projeto voltado a **criptografia real**, **design de interface** e **animações interativas**.  

Atualmente, o projeto contém a **base visual da aplicação**, com animações que simulam o processo de encriptação — as letras digitadas são **embaralhadas** e **voam até desaparecer**, representando a conversão do texto em uma forma protegida.

O objetivo final é transformar este protótipo em um **encriptador e decriptador robusto**, com **criptografia forte e difícil de quebrar**.

---

## 🚀 Tecnologias utilizadas

| Área | Ferramentas / Bibliotecas | Função |
|------|----------------------------|---------|
| ⚛️ Framework | [React](https://react.dev/) via [Vite](https://vitejs.dev/) | Criação da SPA |
| 🎨 Estilo | CSS puro | Responsável pelas animações e estrutura visual |
| 🧩 Ícones | [`react-icons`](https://react-icons.github.io/react-icons/) (`GiPadlock`, `GiPadlockOpen`) | Representação visual da ação de encriptar/decriptar |
| 🧠 Estado | React Hooks (`useState`) | Controle do texto digitado, das letras animadas e do fluxo da animação |

---

## ⚙️ Funcionalidades principais

### 🔸 Área de Encriptação
- Campo de texto para digitação livre.  
- Botão **Encrypt**, que:
  - Dispara um efeito visual onde as letras se **embaralham** e **voam**.  
  - Limpa o campo após a animação.  
- Área à direita reservada para exibir o **texto encriptado** (a ser implementado).

---

### 🔸 Área de Decriptação
- Estrutura já pronta no layout (campo de entrada e saída).  
- O botão **Decrypt** ainda não possui lógica funcional.  
- Será responsável por **converter o texto encriptado de volta ao original**.

---

## 🧭 Objetivos do projeto

O projeto nasceu com a intenção de **praticar lógica** e **animações em CSS**.  
Com o tempo, o foco se expandiu: transformar o conceito em uma ferramenta real de **encriptação e decriptação de mensagens**, com **segurança, performance e design refinado**.

---

## 🧩 Estrutura atual

| Seção | Função |
|-------|---------|
| 🧾 Encryption Area | Captura o texto, aplica o efeito visual e futuramente fará a encriptação real |
| 🔐 Encryption Output | Exibirá o texto criptografado após o processo de encriptação |
| 🔓 Decryption Area | Realizará a decriptação da mensagem recebida, retornando o texto original |

---

## 💡 Ideias e próximos passos

| Etapa | Descrição |
|-------|------------|
| 🔸 Implementar encriptação real | Ainda não sei se irei criar a lógica de encriptação do zero ou se usarei algo existente|
| 🔸 Mostrar texto encriptado | Exibir o resultado criptografado na área da direita |
| 🔸 Criar lógica de decriptação | Converter o texto encriptado novamente para o original |
| 🔸 Adicionar uso de senha/chave | Implementar o uso de uma chave que vai carregar toda a regra de decriptação, de uso único e expirável. |
| 🔸 Melhorar o design | Criar feedbacks visuais, tema escuro e transições suaves |
| 🔸 Persistência segura | Permitir salvar mensagens encriptadas localmente (com segurança) |
| 🔸 Robustez criptográfica | Desenvolver um sistema **difícil de quebrar**, com boas práticas de segurança |

---

## 🧰 Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/text-encryptor.git
cd text-encryptor

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

👨‍💻 Autor

Gabriel Bezerra - 
Desenvolvedor Full-Stack • Estudante de ADS • Apaixonado por Front-End 💙

✨ Este projeto está sendo construído com foco em aprendizado, boas práticas e experimentação visual, evoluindo gradualmente para uma ferramenta completa de encriptação e decriptação segura.