const shell = require('shelljs');

module.exports = async (projectName) => {
  console.log('🔌 Installing TKTK Blocks plugin...');
  shell.exec(
    `cd ${projectName}/wp-content/plugins && git clone https://github.com/brittonwalker/tktk-blocks.git`
  );
  shell.exec(`wp plugin activate tktk-blocks`);
  console.log('✅ TKTK Blocks installed and activated!');
};
