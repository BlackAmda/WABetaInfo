const wabetainfo = require('./wabetainfo')

wabetainfo.firstpageposts().then(console.log);

wabetainfo.getlatest().then(console.log);

wabetainfo.searchpost('https://wabetainfo.com/whatsapp-beta-for-ios-22-22-0-73-whats-new/').then(console.log);