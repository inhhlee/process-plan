// Markdown is the source of truth. This command only regenerates HTML views.
const fs = require('node:fs');
const path = require('node:path');
const { marked } = require('marked');

const root = path.resolve(__dirname, '..');
const sources = [
  '양식/개발계획서.md',
  ...[1, 2, 3, 4, 5].map(n => `관제시스템 과제 진행/과제${n}/과제계획.md`),
];
const headings = ['문서 개요', '배경과 목적', '용어 설명', '기능 범위', '사용할 기술', '개발 로드맵', '완료 기준', '참고 사항·제약'];
const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url = value => value.split(path.sep).map(encodeURIComponent).join('/');
const css = `
:root{--navy:#1f3a5f;--dark:#16283f;--accent:#2f6fed;--soft:#e8f0fe;--ink:#1f2937;--muted:#526074;--line:#dce3ec;--bg:#f5f6f8}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:20px}
body{margin:0;background:var(--bg);color:var(--ink);font-family:'Malgun Gothic','Apple SD Gothic Neo',sans-serif;line-height:1.8;word-break:keep-all;overflow-wrap:anywhere}
a{color:#225cc2;text-underline-offset:3px}a:hover{color:var(--navy)}a:focus-visible{outline:3px solid #d9972b;outline-offset:4px}
.cover{background:linear-gradient(125deg,var(--navy),var(--dark));color:white;padding:42px 28px 36px}
.cover-inner,.wrap{max-width:1120px;margin:auto}.eyebrow{font-size:12px;letter-spacing:.1em;color:#d5e4ff}
h1{font-size:30px;line-height:1.45;margin:12px 0 24px;font-weight:700}
.meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;border-top:1px solid #ffffff35;padding-top:18px;font-size:14px}
.meta span{display:block;font-size:12px;color:#c1d3ef;margin-bottom:4px}.wrap{padding:26px 24px 60px}
.toolbar{display:flex;flex-wrap:wrap;gap:10px 22px;margin-bottom:16px;font-size:13px}.toolbar a{color:var(--muted)}
.notice{font-size:13px;color:var(--muted);margin:0 0 24px}.toc,section{border:1px solid var(--line);background:white;border-radius:10px;margin-bottom:22px;padding:26px 30px}
.toc h2{font-size:15px;color:var(--navy);margin:0 0 10px}.toc ol{columns:2;margin:0;padding-left:22px;column-gap:35px}.toc li{padding:3px 0;font-size:14px;break-inside:avoid}.toc a{text-decoration:none;color:var(--muted)}
section h2{color:var(--navy);font-size:21px;line-height:1.6;display:flex;align-items:center;gap:12px;margin:0 0 18px}
.num{background:var(--accent);color:white;border-radius:6px;width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
h3{font-size:16px;color:var(--navy);margin:28px 0 10px}p{margin:12px 0;color:var(--muted);font-size:14px}li{font-size:14px;margin:5px 0}ul,ol{padding-left:23px}
.table-wrap{overflow-x:auto;margin:12px 0}table{width:100%;border-collapse:collapse;font-size:13px;line-height:1.85}th,td{border:1px solid var(--line);padding:11px 13px;text-align:left;vertical-align:top}th{background:#edf2f9;color:var(--navy);font-weight:700}tr:nth-child(even) td{background:#fafbfd}
section:first-of-type td:first-child{width:180px;color:var(--navy);font-weight:600}th{white-space:nowrap}#s6 th:first-child{min-width:64px}#s6 td:first-child{white-space:nowrap}
blockquote{margin:16px 0;padding:9px 16px;background:var(--soft);border-left:4px solid var(--accent);border-radius:5px}blockquote p{color:var(--navy)}
code{font-family:Consolas,'Malgun Gothic',monospace;font-size:.93em;background:#edf2f7;padding:2px 5px;border-radius:3px}pre{white-space:pre-wrap;background:#edf2f7;padding:16px;border-radius:6px}pre code{padding:0}
li:has(> input[type=checkbox]){list-style:none;margin-left:-22px;padding:10px 0;border-bottom:1px solid var(--line)}input[type=checkbox]{width:17px;height:17px;vertical-align:middle;margin:0 10px 2px 0;accent-color:var(--accent)}
.timeline{list-style:none;display:flex;gap:10px;margin:18px 0 24px;padding:0;counter-reset:step}.timeline li{flex:1;position:relative;text-align:center;background:#f0f5fe;padding:16px 10px;border-radius:7px;font-size:13px;color:var(--navy);counter-increment:step}
.timeline li:before{content:counter(step);display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:var(--accent);color:white;margin:0 auto 10px;font-weight:bold}
footer{text-align:center;color:var(--muted);font-size:12px;margin-top:30px}.source-link{color:#d8e8ff}
@media(max-width:700px){.cover{padding:28px 20px}.wrap{padding:20px 12px 36px}h1{font-size:25px}.meta{grid-template-columns:1fr;gap:12px}.toc,section{padding:22px 18px}.toc ol{columns:1}.timeline{flex-direction:column}.timeline li{text-align:left;display:flex;gap:12px;align-items:center;padding:10px 12px}.timeline li:before{margin:0;flex-shrink:0}.table-wrap table{min-width:540px}section:first-of-type table{min-width:0}section:first-of-type td:first-child{width:100px}section h2{font-size:19px}}
@media print{body{background:white}.cover{background:white;color:var(--navy);padding:0 0 18px}.eyebrow,.meta span{color:var(--muted)}.meta{border-color:var(--line)}.wrap{padding:0}.toolbar,.notice{display:none}.toc,section{border:0;border-radius:0;padding:16px 0;margin:0}h2,h3{break-after:avoid}tr{break-inside:avoid}.table-wrap{overflow:visible}a{color:inherit;text-decoration:none}input{opacity:1}.timeline{break-inside:avoid}}
`;

// Validate every source before writing any view. The blank template owns the shape.
const documents = sources.map(source => ({
  source,
  input: path.join(root, source),
  markdown: fs.readFileSync(path.join(root, source), 'utf8').replace(/^\uFEFF/, ''),
}));
function formatShape(markdown) {
  const tokens = marked.lexer(markdown, { gfm: true });
  const tables = tokens.filter(token => token.type === 'table');
  const overview = tables[0]?.rows ?? [];
  return {
    '절·하위 제목 순서': tokens.filter(token => token.type === 'heading' && token.depth >= 2).map(token => [token.depth, token.text]),
    '표의 열·순서': tables.map(token => token.header.map(cell => cell.text)),
    '문서 개요 항목': overview.map(row => row[0].text),
    '양식 버전': overview.find(row => row[0].text === '양식 버전')?.[1].text ?? null,
  };
}
const expectedShape = formatShape(documents[0].markdown);
for (const { source, markdown } of documents) {
  const actualShape = formatShape(markdown);
  const mainHeadings = [...markdown.matchAll(/^## (\d+)\. (.+)$/gm)];
  if (mainHeadings.length !== 8 || mainHeadings.some((m, i) => +m[1] !== i + 1 || m[2] !== headings[i])) {
    throw new Error(`8개 절을 확인하세요: ${source}`);
  }
  for (const key of Object.keys(expectedShape)) {
    if (JSON.stringify(actualShape[key]) !== JSON.stringify(expectedShape[key])) {
      throw new Error(`빈 양식과 ${key}이 다릅니다: ${source}`);
    }
  }
}

for (const { source, input, markdown } of documents) {
  const title = markdown.match(/^# (.+)$/m)?.[1];
  const parts = [...markdown.matchAll(/^## (\d+)\. (.+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
  if (!title || parts.length !== 8 || parts.some((m, i) => +m[1] !== i + 1 || m[2] !== headings[i])) {
    throw new Error(`8개 절을 확인하세요: ${source}`);
  }
  const meta = key => markdown.match(new RegExp(`^\\| ${key} \\| (.+?) \\|$`, 'm'))?.[1] ?? '미정';
  const output = input.replace(/\.md$/, '.html');
  const toc = headings.map((h, i) => `<li><a href="#s${i + 1}">${esc(h)}</a></li>`).join('');
  const body = parts.map((m, i) => {
    let html = marked.parse(m[3], { gfm: true });
    html = html.replace(/<table>([\s\S]*?)<\/table>/g, '<div class="table-wrap"><table>$1</table></div>');
    html = html.replace(/<blockquote>\s*<p>단계 흐름: ([\s\S]*?)<\/p>\s*<\/blockquote>/g,
      (_, line) => `<ol class="timeline" aria-label="개발 단계">${line.split('→').map(label => `<li>${label.trim()}</li>`).join('')}</ol>`);
    return `<section id="s${i + 1}"><h2><span class="num">${i + 1}</span>${esc(headings[i])}</h2>${html}</section>`;
  }).join('\n');
  const toolbar = sources.map((s, i) => {
    const target = path.join(root, s.replace(/\.md$/, '.html'));
    const label = i === 0 ? '빈 양식' : `과제${i}`;
    return target === output ? `<strong>${label}</strong>` : `<a href="${url(path.relative(path.dirname(output), target))}">${label}</a>`;
  }).join('');
  const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>${css}</style></head>
<body><header class="cover"><div class="cover-inner"><div class="eyebrow">DEVELOPMENT PLAN · 개발계획서</div><h1>${esc(title)}</h1><div class="meta"><div><span>문서</span>${esc(meta('버전'))} · 수정 ${esc(meta('수정일'))}</div><div><span>계획 검토</span>${esc(meta('계획 검토 상태'))}</div><div><span>개발 / 실행 검증</span>${esc(meta('개발 상태'))} / ${esc(meta('실행 검증 상태'))}</div></div></div></header>
<main class="wrap"><nav class="toolbar" aria-label="계획서 이동">${toolbar}<a href="${url(path.basename(input))}">Markdown 원본</a></nav><p class="notice">이 문서는 Markdown 원본에서 만든 보기본입니다. 완료 체크는 실제 결과를 확인한 후 원본에서 갱신합니다.</p><nav class="toc" aria-label="목차"><h2>목차</h2><ol>${toc}</ol></nav>${body}<footer>가상 AMR 관제 시스템 · 개발계획 공통 양식 · 8개 절</footer></main></body></html>\n`;
  fs.writeFileSync(output, html, 'utf8');
  console.log(path.relative(root, output));
}
