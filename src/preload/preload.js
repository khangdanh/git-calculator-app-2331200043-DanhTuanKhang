const { contextBridge } = require('electron');
const { compute, formatNumber, symbolForOp } = require('../shared/calculator');

contextBridge.exposeInMainWorld('calc', {
    compute,
    formatNumber,
    symbolForOp
});