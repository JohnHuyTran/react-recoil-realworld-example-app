import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

function FileUpload() {
  const useStyles = makeStyles((theme: any) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    }),
  );

  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 35,
        flexFlow: 'column',
      }}
    >
      <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
      />
    </div>
  );
}

export default FileUpload;
