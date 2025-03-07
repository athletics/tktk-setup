#!/usr/bin/env node

const { program } = require('commander');
const { input } = require('@inquirer/prompts');
const installWordPress = require('../lib/install-wordpress');
const installTheme = require('../lib/install-theme');
const installBlocks = require('../lib/install-blocks-plugin');
const buildAssets = require('../lib/build-assets');
const outputProjectInfo = require('../lib/output-project-info');
const log = require('../lib/log');

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
      default: 'my-theme',
    });
    const blocksPluginName = await input({
      message: 'Enter the blocks plugin name:',
      default: 'my-blocks',
    });

    log.info(`🚀 Setting up project: ${projectName}\n`);

    try {
      await installWordPress(projectName);
      await installTheme(projectName, themeName);
      await installBlocks(projectName, blocksPluginName);
      await buildAssets(projectName, themeName, blocksPluginName);

      outputProjectInfo(projectName);
    } catch (error) {
      console.error('❌ An error occurred:', error);
    }
  });

program.parse(process.argv);
