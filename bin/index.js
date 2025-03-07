#!/usr/bin/env node

// npx @wordpress/create-block kieran-timberlake --template ~/Development/tktk-blocks-template

const { program } = require('commander');
const input = require('@inquirer/prompts/input');
const installWordPress = require('../lib/install-wordpress');
const installTheme = require('../lib/install-theme');
const installBlocks = require('../lib/install-blocks-plugin');

program
  .name('tktk-setup')
  .description(
    'CLI tool to set up a WordPress project with the TKTK theme and blocks.'
  )
  .action(async () => {
    // Prompt user for project details
    const projectName = await input({
      message: 'Enter the project folder name:',
    });
    const themeName = await input({
      message: 'Enter the theme name:',
      default: 'tktk-theme',
    });
    const blocksPluginName = await input({
      message: 'Enter the blocks plugin name:',
      default: 'tktk-blocks',
    });

    console.log(`🚀 Setting up project: ${projectName}`);

    try {
      await installWordPress(projectName);
      await installTheme(projectName, themeName);
      await installBlocks(projectName, blocksPluginName);

      console.log(
        '✅ Setup complete! Navigate to your project and start development.'
      );
    } catch (error) {
      console.error('❌ An error occurred:', error);
    }
  });

program.parse(process.argv);
