import React from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';
import { SimpleSampleErrorT } from '../types/SimpleSampleErrorT';

type OfflineInfoProps = {
  visible: boolean,
  hideDialog: () => void,
  errorData: SimpleSampleErrorT,
}

export const ErrorInfoDialog = ({ visible, hideDialog, errorData }: OfflineInfoProps) => {
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Data fetch error: {errorData?.code}</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{errorData?.message}</Paragraph>
        <Paragraph>Error while retrieving data please try again</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
