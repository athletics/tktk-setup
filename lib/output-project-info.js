const chalk = require('chalk');
const path = require('path');

module.exports = (projectName) => {
  const dbName = projectName.replace(/[^a-zA-Z0-9_]/g, '_');
  const siteUrl = `http://${projectName}.test`;
  const projectPath = path.resolve(process.cwd(), projectName);

  console.log(
    chalk.green.bold(`\n🎉 Setup Complete! Here are your project details:\n`)
  );

  console.log(
    `🌍 ${chalk.cyan('Site URL:')}         ${chalk.underline(siteUrl)}`
  );
  console.log(`👤 ${chalk.cyan('Admin Username:')}   admin`);
  console.log(`🔑 ${chalk.cyan('Admin Password:')}   password`);
  console.log(`🗄️  ${chalk.cyan('Database Name:')}    ${dbName}`);
  console.log(`📂 ${chalk.cyan('Project Path:')}     ${projectPath}`);
  console.log(
    `🔗 ${chalk.cyan('Valet Link:')}       https://${projectPath}.test`
  );

  console.log(`\n💡 ${chalk.yellow('Next Steps:')}`);
  console.log(`   👉 ${chalk.green(`cd ${projectName}`)}`);
  console.log(`   👉 ${chalk.green('wp admin login')}  (auto-login to WP)`);
  console.log(`   👉 ${chalk.green('wp user list')}    (view users)\n`);
  console.log(chalk.magenta.bold('🚀 Happy coding!'));
};
