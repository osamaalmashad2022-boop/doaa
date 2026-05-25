const fs = require('fs');

const mdContent = fs.readFileSync('.md', 'utf-8');
const lines = mdContent.split('\n');

const data = {
  categories: []
};

let currentCategory = null;

const categoriesMap = [
  { keywords: ['أولاً:', 'أولاً:'], id: 'virtues', title: 'فضل الدعاء وأهميته' },
  { keywords: ['ثانياً: أَوْقَاتٌ', 'ثانياً:'], id: 'times', title: 'أوقات وأحوال الإجابة' },
  { keywords: ['ثالثاً: أسماء الله'], id: 'names', title: 'أسماء الله الحسنى' },
  { keywords: ['أَوَّلاً: أَدْعِيَةٌ مِنَ الْقُرْآنِ', 'أولاً: أدعية من القرآن'], id: 'quran', title: 'أدعية من القرآن الكريم' },
  { keywords: ['ثَانِياً: أَدْعِيَةٌ مِنَ السُّنَّةِ', 'ثانياً: أدعية من السنة'], id: 'sunnah', title: 'أدعية من السنة النبوية' },
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  let isHeader = false;
  for (const cat of categoriesMap) {
    if (cat.keywords.some(k => line.includes(k))) {
      currentCategory = { id: cat.id, title: cat.title, items: [] };
      data.categories.push(currentCategory);
      isHeader = true;
      break;
    }
  }

  if (isHeader) continue;

  if (currentCategory) {
    if (line.match(/^[\d١-٩]+[-.]/)) {
       currentCategory.items.push({ text: line.replace(/^[\d١-٩]+[-.]\s*/, '').trim() });
    } else if (line.startsWith('﴿') || line.startsWith('«') || line.startsWith('قال') || line.startsWith('اللَّهُ،')) {
       currentCategory.items.push({ text: line });
    } else if (currentCategory.id === 'virtues') {
       currentCategory.items.push({ text: line });
    }
  }
}

// Clean up:
data.categories = data.categories.map(c => ({
    ...c,
    items: c.items.filter(i => i.text && !i.text.includes('كيف تدعو') && !i.text.includes('قائمة بأسماء') && !i.text.includes('ملاحظة'))
}));

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/content.json', JSON.stringify(data, null, 2));
console.log('Parsed successfully');
