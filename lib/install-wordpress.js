const { execSync } = require('child_process');
const log = require('./log');

module.exports = async (projectName) => {
  log.info(`📥 Downloading WordPress into ${projectName}...`);

  execSync(
    `mkdir -p ${projectName} && cd ${projectName} && wp core download --skip-content`,
    { stdio: 'inherit' }
  );

  log.info(`\n🔗 Linking ${projectName} to Valet...`);
  execSync(`cd ${projectName} && valet link ${projectName}`, {
    stdio: 'inherit',
  });

  log.info(`\n🔒 Securing ${projectName} with HTTPS...`);
  execSync(`cd ${projectName} && valet secure ${projectName}`, {
    stdio: 'inherit',
  });

  log.info(`\n⚙️ Configuring wp-config.php...\n`);

  const dbName = projectName.replace(/[^a-zA-Z0-9_]/g, '_'); // Ensure valid DB name
  const dbUser = 'root';
  const dbPassword = '';
  const dbHost = 'localhost';
  const siteUrl = `http://${projectName}.test`;

  // Create the wp-config.php file
  execSync(
    `cd ${projectName} && wp config create --dbname=${dbName} --dbuser=${dbUser} --dbpass=${dbPassword} --dbhost=${dbHost}`,
    { stdio: 'inherit' }
  );

  log.info(`\n🗄️ Creating the database: ${dbName}`);
  execSync(`cd ${projectName} && wp db create`, { stdio: 'inherit' });

  log.info(`\n👤 Creating an admin user and installing WordPress...`);

  const adminUser = 'admin';
  const adminPass = 'password'; // Change this as needed
  const adminEmail = 'admin@example.com';
  const siteTitle = `Welcome to ${projectName}`;

  execSync(
    `cd ${projectName} && wp core install --url=${siteUrl} --title="${siteTitle}" --admin_user=${adminUser} --admin_password=${adminPass} --admin_email=${adminEmail}`,
    { stdio: 'inherit' }
  );

  log.info(`\n✅ WordPress installed and ready at ${siteUrl}`);
};
