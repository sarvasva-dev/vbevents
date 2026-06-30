const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

function processDesign(outputFile, outHtml, reactPath, componentName) {
    if (!fs.existsSync(outputFile)) {
        console.log(`File not found: ${outputFile}`);
        return;
    }
    const content = fs.readFileSync(outputFile, 'utf8');
    const data = JSON.parse(content);
    let downloadUrl = "";
    if (data.outputComponents && data.outputComponents.length > 0) {
        for (let comp of data.outputComponents) {
            if (comp.design && comp.design.screens && comp.design.screens.length > 0) {
                downloadUrl = comp.design.screens[0].htmlCode.downloadUrl;
                break;
            }
        }
    } else if (data.htmlCode) {
        downloadUrl = data.htmlCode.downloadUrl;
    }

    if (!downloadUrl) {
        console.log(`No downloadUrl found in ${outputFile}`);
        return;
    }

    console.log(`Downloading HTML to ${outHtml}...`);
    execSync(`curl "${downloadUrl}" -o ${outHtml}`);
    
    // convert
    convertHtmlToReact(outHtml, reactPath, componentName);
}

function convertHtmlToReact(htmlPath, outPath, componentName) {
    if (!fs.existsSync(htmlPath)) return;
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract the body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : html;
    
    // Replace class with className
    body = body.replace(/class=/g, 'className=');
    // Replace for with htmlFor
    body = body.replace(/for=/g, 'htmlFor=');
    // Self-close unclosed tags (img, input, hr, br)
    body = body.replace(/<(img|input|hr|br)([^>]*?)(?!\/)> /g, '<$1$2 /> ');
    // Handle inline styles if any
    body = body.replace(/style="([^"]*)"/g, (match, p1) => {
        const styleObj = {};
        p1.split(';').forEach(style => {
            if (style.trim()) {
                const [key, value] = style.split(':');
                if (key && value) {
                    const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    styleObj[camelKey] = value.trim();
                }
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });
    
    const componentCode = `
import React from 'react';
import Image from 'next/image';

export default function ${componentName}() {
  return (
    <>
      ${body}
    </>
  );
}
`;
    
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, componentCode);
    console.log(`Converted ${htmlPath} to ${outPath}`);
}

processDesign('C:/Users/Admin/.gemini/antigravity/brain/c6fcdd32-9a42-42ad-9373-5e91abe4b1b2/.system_generated/steps/1300/output.txt', 'website3.html', 'src/app/website3/page.tsx', 'Website3');
processDesign('C:/Users/Admin/.gemini/antigravity/brain/c6fcdd32-9a42-42ad-9373-5e91abe4b1b2/.system_generated/steps/1303/output.txt', 'website4.html', 'src/app/website4/page.tsx', 'Website4');
