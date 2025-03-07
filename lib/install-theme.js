const { execSync } = require('child_process');
const log = require('./log');

module.exports = async (projectName, themeName) => {
  log.info('\n🎨 Installing TKTK theme...');

  try {
    // Install the theme using tktk-installer
    execSync(
      `cd ${projectName}/wp-content/themes && tktk-installer i -t ${themeName}`,
      { stdio: 'inherit' }
    );

    // Activate the theme (ensure it runs in the correct path)
    log.info(`\n🔗 Activating ${themeName}...`);
    execSync(`wp theme activate ${themeName} --path=${projectName}`, {
      stdio: 'inherit',
    });

    log.info('\n✅ TKTK theme installed and activated!');
  } catch (error) {
    log.error('❌ Error installing theme:', error);
  }
};
