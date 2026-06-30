const fs = require('fs');
['src/app/website2/page.tsx', 'src/app/website3/page.tsx', 'src/app/website4/page.tsx'].forEach(f => {
    if (!fs.existsSync(f)) return;
    let data = fs.readFileSync(f, 'utf8');
    data = data.replace(/disabled=""/g, 'disabled={true}');
    data = data.replace(/selected=""/g, 'defaultValue=""');
    data = data.replace(/readonly=""/g, 'readOnly={true}');
    fs.writeFileSync(f, data);
});
