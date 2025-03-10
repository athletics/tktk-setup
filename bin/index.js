#!/usr/bin/env node

/*
 * External dependencies
 */
const { program } = require('commander');
const { input } = require('@inquirer/prompts');
const chalk = require('chalk');

/*
 * Internal dependencies
 */
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
    log.info(
      chalk.cyan.bold(`
      ████████╗██╗░░██╗████████╗██╗░░██╗
      ╚══██╔══╝██║░██╔╝╚══██╔══╝██║░██╔╝
      ░░░██║░░░█████═╝░░░░██║░░░█████═╝░
      ░░░██║░░░██╔═██╗░░░░██║░░░██╔═██╗░
      ░░░██║░░░██║░╚██╗░░░██║░░░██║░╚██╗
      ░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝
      `)
    );

    log.info(
      chalk.yellow.bold('TKTK Setup: WordPress, Theme & Blocks Installer\n')
    );

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

    log.info(`\n🚀 Setting up project: ${projectName}\n`);

    try {
      await installWordPress(projectName);
      await installTheme(projectName, themeName);
      await installBlocks(projectName, blocksPluginName);
      await buildAssets(projectName, themeName, blocksPluginName);

      outputProjectInfo(projectName, themeName, blocksPluginName);
    } catch (error) {
      console.error('❌ An error occurred:', error);
    }
  });

program.parse(process.argv);
