const { execSync } = require('child_process');
const chalk = require('chalk');
const path = require('path');

module.exports = async (projectName, themeName, blocksPluginName) => {
  console.log(
    chalk.blue.bold(`\n⚙️ Building theme and blocks plugin assets...`)
  );

  try {
    const themePath = path.join(projectName, 'wp-content/themes', themeName);
    const blocksPath = path.join(
      projectName,
      'wp-content/plugins',
      blocksPluginName
    );

    // Build Theme Assets
    console.log(
      chalk.yellow(`\n📦 Installing & building theme: ${themeName}...`)
    );
    execSync(`cd ${themePath} && npm run build`, { stdio: 'inherit' });

    // Build Blocks Plugin Assets
    console.log(
      chalk.yellow(
        `\n🔌 Installing & building blocks plugin: ${blocksPluginName}...`
      )
    );
    execSync(`cd ${blocksPath} && npm run build`, { stdio: 'inherit' });

    console.log(
      chalk.green.bold(
        `\n✅ Theme and blocks plugin assets built successfully!`
      )
    );
  } catch (error) {
    console.error(chalk.red.bold(`\n❌ Error building assets: ${error}`));
  }
};
