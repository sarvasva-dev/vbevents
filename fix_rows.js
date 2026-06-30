const fs = require('fs');
['src/app/website2/page.tsx', 'src/app/website3/page.tsx', 'src/app/website4/page.tsx'].forEach(f => {
    if (!fs.existsSync(f)) return;
    let data = fs.readFileSync(f, 'utf8');
    data = data.replace(/rows="(\d+)"/g, 'rows={$1}');
    fs.writeFileSync(f, data);
});
