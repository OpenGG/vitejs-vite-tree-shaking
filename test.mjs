import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import color from 'ansi-colors-es6';

const cwd = '/tmp/vite';

const keyword = 'NOT_USED';

const files = await fg(['**/*.js'], { dot: true, cwd });

for (const f of files) {
  const content = await fs.readFile(path.resolve(cwd, f), 'utf8');
  if (content.includes(keyword)) {
    process.exitCode = 1;
    console.log(color.red('ERROR: tree shaking failed'));

    console.log(
      content.replace(new RegExp(keyword, 'g'), (m) => {
        return color.red(m);
      })
    );
  }
}
