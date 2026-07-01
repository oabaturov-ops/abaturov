const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const lines = input.split('\n');

let title = '', excerpt = '', category = '', tags = '';
let textStarted = false;
let textLines = [];

for (const line of lines) {
  if (/^(Название|Заголовок|Title):\s*/i.test(line)) {
    title = line.replace(/^(Название|Заголовок|Title):\s*/i, '').trim();
  } else if (/^(Описание|Description|Excerpt):\s*/i.test(line)) {
    excerpt = line.replace(/^(Описание|Description|Excerpt):\s*/i, '').trim();
  } else if (/^(Категория|Category):\s*/i.test(line)) {
    category = line.replace(/^(Категория|Category):\s*/i, '').trim();
  } else if (/^(Теги|Tags):\s*/i.test(line)) {
    tags = line.replace(/^(Теги|Tags):\s*/i, '').trim();
  } else if (/^(Текст|Text|Content):\s*/i.test(line)) {
    textStarted = true;
    var rest = line.replace(/^(Текст|Text|Content):\s*/i, '').trim();
    if (rest) textLines.push(rest);
  } else if (textStarted) {
    textLines.push(line);
  }
}

var content = textLines.join('\n').trim();

// Remove surrounding quotes if present
if (content.startsWith('"') && content.endsWith('"')) {
  content = content.slice(1, -1).trim();
}

if (!title) { console.log('ERROR: No title found'); process.exit(1); }
if (!content) { console.log('ERROR: No content found'); process.exit(1); }

// Transliterate title to slug
var ruMap = {а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'yo',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya',А:'A',Б:'B',В:'V',Г:'G',Д:'D',Е:'E',Ё:'Yo',Ж:'Zh',З:'Z',И:'I',Й:'Y',К:'K',Л:'L',М:'M',Н:'N',О:'O',П:'P',Р:'R',С:'S',Т:'T',У:'U',Ф:'F',Х:'Kh',Ц:'Ts',Ч:'Ch',Ш:'Sh',Щ:'Shch',Ъ:'',Ы:'Y',Ь:'',Э:'E',Ю:'Yu',Я:'Ya'};
var slug = title.split('').map(function(c) { return ruMap[c] || c; }).join('')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

var tagsArr = tags ? tags.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];
var paragraphs = content.split(/\n\s*\n/).filter(function(p) { return p.trim(); });

var article = {
  title: title,
  excerpt: excerpt || title,
  category: category || 'Без категории',
  tags: tagsArr,
  content: paragraphs,
  slug: slug,
  date: new Date().toISOString().split('T')[0],
  readTime: Math.max(1, Math.ceil(paragraphs.join(' ').split(/\s+/).length / 200))
};

var dir = path.join(__dirname, 'content', 'articles');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
var filePath = path.join(dir, slug + '.json');
fs.writeFileSync(filePath, JSON.stringify(article, null, 2), 'utf8');

console.log('+ ' + slug + '.json');
console.log('  Title: ' + title);
console.log('  Category: ' + article.category);
console.log('  Tags: ' + (tagsArr.length ? tagsArr.join(', ') : '(none)'));
console.log('  Paragraphs: ' + paragraphs.length);