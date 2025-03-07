const { execSync } = require('child_process');
const log = require('./log');

module.exports = async (projectName, blocksPluginName) => {
  log.info('\n🔌 Installing TKTK Blocks plugin...');

  try {
    execSync(
      `cd ${projectName}/wp-content/plugins && npx @wordpress/create-block ${blocksPluginName} --template @athletics/tktk-blocks-template --namespace ${blocksPluginName}`,
      { stdio: 'inherit' }
    );

    // Activate the plugin (ensure it runs in the correct path)
    log.info(`🔗 Activating ${blocksPluginName}...`);
    execSync(`wp plugin activate ${blocksPluginName} --path=${projectName}`, {
      stdio: 'inherit',
    });

    log.info('✅ TKTK Blocks installed and activated!');
  } catch (error) {
    log.error('❌ Error installing plugin:', error);
  }
};
