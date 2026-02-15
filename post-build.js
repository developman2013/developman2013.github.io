const fs = require('fs-extra');
const customDomain = 'pirahouski.com';

async function runPostBuild() {
  try {
    await fs.remove('docs');
    await fs.move('dist/browser', 'docs', { overwrite: true });
    await fs.outputFile('docs/CNAME', `${customDomain}\n`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

runPostBuild();
