async function carregarAlunos() {
  const lista = document.getElementById('lista');

  try {
    const resposta = await fetch('students.json', { cache: 'no-store' });
    const alunos = await resposta.json();

    if (!Array.isArray(alunos) || alunos.length === 0) {
      lista.innerHTML = '<p class="vazio">Nenhum aluno cadastrado no momento.</p>';
      return;
    }

    lista.innerHTML = alunos.map(renderAluno).join('');
  } catch (erro) {
    lista.innerHTML = '<p class="vazio">Não foi possível carregar a lista de alunos no momento.</p>';
    console.error('Erro ao carregar students.json:', erro);
  }
}

function renderAluno(aluno) {
  const curso = aluno.curso ? `<span class="aluno-curso">${escapeHtml(aluno.curso)}</span>` : '';
  const descricao = aluno.descricao ? `<p class="aluno-descricao">${escapeHtml(aluno.descricao)}</p>` : '';

  const links = Array.isArray(aluno.links) && aluno.links.length
    ? `<ul class="aluno-links">${aluno.links.map(l =>
        `<li><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.rotulo)}</a></li>`
      ).join('')}</ul>`
    : '';

  return `
    <article class="aluno">
      <div class="aluno-topo">
        <h2 class="aluno-nome">${escapeHtml(aluno.nome)}</h2>
        ${curso}
      </div>
      ${descricao}
      ${links}
    </article>
  `;
}

function escapeHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto || '';
  return div.innerHTML;
}

function escapeAttr(texto) {
  return (texto || '').replace(/"/g, '&quot;');
}

carregarAlunos();
