const { urls, updateData } = require('./update.release.js');
const download = require('download');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const isWindows = process.platform === 'win32';

const pathToUpdateData = path.resolve(process.cwd(), 'update.json');
const currentUpdateData = (
  fs.existsSync(pathToUpdateData)
    ? JSON.parse(fs.readFileSync(pathToUpdateData, { encoding: 'utf8' }))
    : undefined
);

const fetchLatestUpdateData = async () => {
  fetch(isWindows ? updateData.winUrl : updateData.linuxUrl)
    .then(response => response.json())
    .catch(error => {
      console.error(error);

      return undefined;
    });
};

const downloadServerFiles = () => {
  const allUrls = [updateData, ...urls];

  allUrls.forEach(file => {
    const url = isWindows ? file.winUrl : file.linuxUrl;

    if (url) {
      const splittedUrl = url.split('/');
      const fileName = splittedUrl[splittedUrl.length - 1];
      const filePath = path.resolve(process.cwd(), file.destination, fileName);

      download(url, file.destination)
        .then(() => console.log(`${filePath} - ${chalk.green('Success')}`))
        .catch(() => console.log(`${filePath} - ${chalk.red('Fail')}`));
    }
  });
};

const init = async () => {
  if (currentUpdateData) {
    const latestUpdateData = await fetchLatestUpdateData();

    if (latestUpdateData && latestUpdateData.latestBuildNumber > currentUpdateData.latestBuildNumber) {
      downloadServerFiles();
    } else {
      let allFilesIsExists = true;
      const allUrls = [updateData, ...urls];

      allUrls.forEach(file => {
        const url = isWindows ? file.winUrl : file.linuxUrl;

        if (url) {
          const splittedUrl = url.split('/');
          const fileName = splittedUrl[splittedUrl.length - 1];
          const filePath = path.resolve(process.cwd(), file.destination, fileName);

          if (!fs.existsSync(filePath)) {
            allFilesIsExists = false;
          }
        }
      });

      if (allFilesIsExists) {
        console.log(chalk.green('Already up-to-date'));
      } else {
        downloadServerFiles();
      }
    }
  } else {
    downloadServerFiles();
  }
};

init();

