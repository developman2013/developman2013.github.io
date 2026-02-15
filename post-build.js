const fs = require('fs-extra');

async function runPostBuild() {
  try {
    await fs.remove('docs');
    await fs.move('dist/browser', 'docs', { overwrite: true });
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

runPostBuild();
