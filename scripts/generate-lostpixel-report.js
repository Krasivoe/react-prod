const fs = require('fs');
const { join: joinPath } = require('path');

const lostPixelDir = joinPath(__dirname, '..', '.lostpixel');
const diffDir = joinPath(lostPixelDir, 'difference');

const baselineWeb = './baseline';
const actualWeb = './current';

const exists = fs.existsSync(diffDir);
const files = exists
    ? fs.readdirSync(diffDir).filter((f) => f.endsWith('.png'))
    : [];

const cards = files.map((file) => `
    <div class="card">
        <h2>${file}</h2>
        
    
        <img-comparison-slider class="slider">
             <img slot="first" class="slider__image" src="${baselineWeb}/${file}" />
             <img slot="second" class="slider__image" src="${actualWeb}/${file}" />
        </img-comparison-slider>
        
        <div class="labels">
            <div class="label">BEFORE</div>
            <div class="label">AFTER</div>
        </div>
    </div>
`).join('\n');

const body = files.length === 0
    ? '<h1 class="success">No visual regressions detected</h1>'
    : `
    <h1>Visual Regression Report</h1>
        
        <div class="cards">
             ${cards}
        </div>
    `;

const html = `
<html>
    <head>
        <script type="module" src="https://unpkg.com/img-comparison-slider@8/dist/index.js"></script>
        
        <style>
            body {
                font-family:sans-serif;
                max-width:1200px;
                margin:auto;
                padding:40px;
            }
            
            h1 {
                text-align:center;
            }
            
            h1.success {
                color: #00e300
            }
            
            .cards {
                display: flex;
                flex-direction: column;
                row-gap: 56px;
            }
            
            .slider {
                width: 100%;
                border: 2px solid -webkit-focus-ring-color;
                outline: none;
            }
            
            .slider__image {
                max-width: 100%;
                object-fit: contain;
            }
            
            .labels {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 12px;
            }

            .label {
                font-size: 12px;
                background: black;
                color: white;
                padding: 2px 6px;
                opacity: 0.7;
            }
        </style>
    </head>

    <body>
        ${body}
    </body>
</html>
`;

fs.writeFileSync(joinPath(lostPixelDir, 'report.html'), html);

console.log('report generated');
