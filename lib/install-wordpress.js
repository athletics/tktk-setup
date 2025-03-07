const shell = require('shelljs');

module.exports = async (projectName) => {
  console.log(`📥 Downloading WordPress into ${projectName}...`);
  shell.exec(`mkdir ${projectName} && cd ${projectName} && wp core download`);

  console.log(`🔗 Linking ${projectName} to Valet...`);
  shell.exec(`cd ${projectName} && valet link ${projectName}`);

  console.log(`🔒 Securing ${projectName} with HTTPS...`);
  shell.exec(`cd ${projectName} && valet secure ${projectName}`);

  console.log(`✅ WordPress installed and linked to Valet.`);
};
