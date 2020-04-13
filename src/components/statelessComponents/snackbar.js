import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const SimpleSnackbar = ( props ) => {

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={props.open}
                autoHideDuration={6000}
                onClose={props.handleAction}
                message={props.message}
                action={
                    <React.Fragment>
                    <Button color="secondary" size="small" onClick={props.handleAction}>
                        CLOSE
                    </Button>
                    </React.Fragment>
                }
                />
        </div>
    );
}

export default SimpleSnackbar;
