const fs = require('fs');
const path = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\c6fcdd32-9a42-42ad-9373-5e91abe4b1b2\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(path, 'utf8').split('\n');
for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const data = JSON.parse(line);
        if (data.tool_calls) {
            for (const tool of data.tool_calls) {
                if (tool.name === 'call_mcp_tool' || tool.name === 'default_api:call_mcp_tool') {
                    const str = JSON.stringify(tool);
                    if (str.includes('generate_screen_from_text')) {
                        console.log(str);
                        process.exit(0);
                    }
                }
            }
        }
    } catch(e) {}
}
