module.exports = {
  updateData: {
    linuxUrl: 'http://cdn.altv.mp/server/release/x64_linux/update.json',
    winUrl: 'http://cdn.altv.mp/server/release/x64_win32/update.json',
    destination: '.'
  },
  urls: [
    {
      linuxUrl: 'http://cdn.altv.mp/server/release/x64_linux/altv-server',
      winUrl: 'http://cdn.altv.mp/server/release/x64_win32/altv-server.exe',
      destination: '.'
    },
    {
      linuxUrl: 'http://cdn.altv.mp/server/release/x64_linux/data/vehmodels.bin',
      winUrl: 'http://cdn.altv.mp/server/release/x64_win32/data/vehmodels.bin',
      destination: 'data'
    },
    {
      linuxUrl: 'http://cdn.altv.mp/server/release/x64_linux/data/vehmods.bin',
      winUrl: 'http://cdn.altv.mp/server/release/x64_win32/data/vehmods.bin',
      destination: 'data'
    },
    {
      linuxUrl: 'http://cdn.altv.mp/node-module/release/x64_linux/libnode.so.72',
      winUrl: 'http://cdn.altv.mp/node-module/release/x64_win32/libnode.dll',
      destination: '.'
    },
    {
      linuxUrl: 'http://cdn.altv.mp/node-module/release/x64_linux/modules/libnode-module.so',
      winUrl: 'http://cdn.altv.mp/node-module/release/x64_win32/modules/node-module.dll',
      destination: 'modules'
    },
    {
      linuxUrl: 'https://cdn.altv.mp/others/start.sh',
      destination: '.'
    }
  ]
}