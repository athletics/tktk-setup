const chalk = require('chalk');
const path = require('path');

module.exports = (projectName, themeName, blocksPluginName) => {
  const dbName = projectName.replace(/[^a-zA-Z0-9_]/g, '_');
  const siteUrl = `http://${projectName}.test`;
  const projectPath = path.resolve(process.cwd(), projectName);
  const themePath = path.join(projectPath, 'wp-content/themes', themeName);
  const pluginPath = path.join(
    projectPath,
    'wp-content/plugins',
    blocksPluginName
  );

  console.log(
    chalk.green.bold(`\n🎉 Setup Complete! Here are your project details:\n`)
  );

  console.log(
    `🌍 ${chalk.cyan('Site URL:')}        ${chalk.underline(siteUrl)}`
  );
  console.log(
    `🔑 ${chalk.cyan('Admin Panel:')}     ${chalk.underline(
      `${siteUrl}/admin`
    )}`
  );
  console.log(`👤 ${chalk.cyan('Admin Username:')}  admin`);
  console.log(`🔑 ${chalk.cyan('Admin Password:')}  password`);
  console.log(`🗄️  ${chalk.cyan('Database Name:')}   ${dbName}`);
  console.log(`📂 ${chalk.cyan('Project Path:')}    ${projectPath}`);

  console.log(`\n💡 ${chalk.yellow('Next Steps:')}`);
  console.log(`   👉 ${chalk.green(`cd ${projectName}`)}`);

  console.log(chalk.blue.bold(`\n🔧 Development:`));
  console.log(`   🖌  ${chalk.cyan('Theme Development:')}`);
  console.log(`       👉 ${chalk.green(`cd ${themePath} && npm run dev`)}`);
  console.log(`   🔌  ${chalk.cyan('Blocks Plugin Development:')}`);
  console.log(`       👉 ${chalk.green(`cd ${pluginPath} && npm run dev`)}\n`);

  console.log(chalk.magenta.bold('🚀 Happy coding!\n'));
};
