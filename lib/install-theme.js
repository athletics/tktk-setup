const shell = require('shelljs');

module.exports = async (projectName) => {
  console.log('🎨 Installing TKTK theme...');
  shell.exec(`cd ${projectName}/wp-content/themes && npx tktk-installer i`);
  console.log('✅ TKTK theme installed and activated!');
};
