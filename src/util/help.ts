import { ipcMain, dialog } from 'electron';

// Open dialog menu
ipcMain.handle('open-folder', async (e, ...args) => {
    return await dialog.showOpenDialog({
        properties: ['openDirectory']
    });
});
