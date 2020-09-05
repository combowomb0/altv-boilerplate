const path = require('path');
const { watch } = require('chokidar');
const { existsSync } = require('fs');
const { red } = require('chalk');
const { spawn } = require('child_process');

const isWindows = process.platform === 'win32';
const getExec = isWindows ? 'altv-server.exe' : 'start.sh';
const pathToExec = path.resolve(process.cwd(), getExec);
const resources = path.resolve(process.cwd(), 'resources');

const runServer = () => {
  if (!existsSync(pathToExec)) {
    throw new Error(red(`${getExec} not found`));
  }

  return spawn(pathToExec, { stdio: 'inherit' });
};

let serverProcess = runServer();

const watchHandler = () => {
  serverProcess.kill();
  serverProcess = runServer();
};

watch(resources)
  .on('add', watchHandler)
  .on('change', watchHandler);
