# Site de links dos alunos — Laboratório

Página estática simples para listar os links acadêmicos (Lattes, ORCID, GitHub etc.) dos alunos orientandos. Feita para ser publicada gratuitamente no **GitHub Pages** e linkada a partir do site oficial do laboratório na UFPE — sem precisar mexer no código-fonte do site institucional.

## Como publicar (uma vez)

1. Crie uma conta no [GitHub](https://github.com) caso ainda não tenha.
2. Crie um repositório novo, público, com o nome que preferir (ex.: `alunos-laboratorio`).
3. Envie os 5 arquivos desta pasta (`index.html`, `style.css`, `script.js`, `students.json`, este `README.md`) para o repositório — pode arrastar e soltar direto na página do GitHub, em "Add file → Upload files".
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
6. Aguarde 1–2 minutos. O GitHub vai te dar uma URL parecida com:
   `https://SEU-USUARIO.github.io/alunos-laboratorio/`
7. Cole essa URL como um link comum na página do site do laboratório (ex.: um botão ou item de menu "Alunos" apontando para esse endereço). Isso não exige nenhuma permissão especial no site da UFPE — é só um link para fora, como qualquer outro.

## Como adicionar ou editar um aluno

Você não precisa mexer no HTML nem no CSS. Basta editar o arquivo `students.json`, que é uma lista simples. Para cada aluno:

```json
{
  "nome": "Nome do Aluno",
  "curso": "Curso ou linha de pesquisa",
  "descricao": "Frase curta e opcional sobre o trabalho do aluno.",
  "links": [
    { "rotulo": "Lattes", "url": "http://lattes.cnpq.br/..." },
    { "rotulo": "ORCID", "url": "https://orcid.org/..." }
  ]
}
```

Passos:

1. No GitHub, abra o arquivo `students.json` no repositório.
2. Clique no ícone de lápis (editar).
3. Copie um bloco `{ ... }` de um aluno existente, cole logo depois (separando por vírgula) e altere os dados.
4. Clique em "Commit changes" (salvar).
5. O site atualiza sozinho em menos de um minuto — não precisa fazer mais nada.

Para remover um aluno, basta apagar o bloco correspondente (removendo também a vírgula extra, se sobrar).

## Domínio próprio (opcional)

Se o laboratório tiver um subdomínio próprio (ex.: `alunos.seulaboratorio.com`), o GitHub Pages permite apontar um domínio personalizado em Settings → Pages → Custom domain. Isso exige configurar um registro DNS — se quiser seguir por esse caminho, posso te ajudar com o passo a passo depois.
