// electron
import { ipcRenderer } from 'electron';
import { OpenDialogReturnValue } from 'electron/renderer';

// react
import React, { useState } from 'react';

// mui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// other
import { getFiles } from 'yo-data-processing/stream';
import { getObservable } from 'yo-data-processing/rxjs';

export function Header() {
    const [directory, setDirectory] = useState('');

    const openFolder = async () => {
        const result: OpenDialogReturnValue = await ipcRenderer.invoke(
            'open-folder'
        );

        if (!result.canceled) {
            const list: string[] = [];

            setDirectory(result.filePaths[0]);
            getObservable<string>(getFiles(result.filePaths[0]))
            .subscribe({
                next: (folder) => { console.log(folder) }
            })
        }
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Button
                    variant="contained"
                    size="medium"
                    onClick={() => {
                        openFolder();
                    }}
                >
                    Выбрать
                </Button>
                <Typography variant="h6" color="inherit" component="div">
                    {directory}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
