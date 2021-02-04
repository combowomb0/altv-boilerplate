const path = require('path');
const chokidar = require('chokidar');
const fs = require('fs');
const childProcess = require('child_process');

class Watcher {
  constructor() {
    const exec = process.platform === 'win32' ? 'altv-server.exe' : 'start.sh';
    const resourcesFolder = path.resolve(process.cwd(), 'resources');
    this.pathToServer = path.resolve(process.cwd(), exec);
    this.runServer();

    const instance = chokidar.watch(resourcesFolder, { interval: 1000 });

    instance.on('ready', () => {
      instance
        .on('add', this.restartServer)
        .on('change', this.restartServer);
    });
  }

  runServer = () => {
    if (!fs.existsSync(this.pathToServer)) {
      throw new Error(`${this.pathToServer} not found`);
    }

    this.process = childProcess.spawn(this.pathToServer, { stdio: 'inherit' });
  };

  restartServer = () => {
    if (this.process) {
      this.process.kill('SIGKILL');

      this.process.on('close', () => {
        this.process.removeAllListeners();
        this.process = undefined;
        this.runServer();
      });
    } else {
      this.runServer();
    }
  };
}

new Watcher();
