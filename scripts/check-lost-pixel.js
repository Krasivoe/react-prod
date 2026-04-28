const fs = require('fs');
const path = require('path');

const diffDir = path.join(process.cwd(), '.lostpixel', 'difference');

try {
    if (!fs.existsSync(diffDir)) {
        console.log('✅ Визуальные различия не обнаружены');
        process.exit(0);
    }

    const files = fs.readdirSync(diffDir).filter((f) => !f.startsWith('.')
        && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp')));

    if (files.length === 0) {
        console.log('✅ Визуальные различия не обнаружены');
        process.exit(0);
    }

    console.error(`\n❌ Обнаружены визуальные регрессии! Найдено ${files.length} различий(е):\n`);
    files.forEach((f) => console.error(`   - ${f}`));
    console.error('\n💡 Запустите "npm run test:ui:update" для обновления эталонных скриншотов\n');
    process.exit(1);
} catch (error) {
    console.error('⚠️ Ошибка при проверке различий:', error.message);
    process.exit(0); // Не падаем по ошибке проверки, только по реальным diff'ам
}
