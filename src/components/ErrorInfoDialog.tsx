import React from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';
import { SimpleSampleErrorT } from '../types/SimpleSampleErrorT';

type OfflineInfoProps = {
  visible: boolean,
  hideDialog: () => void,
  errorData: SimpleSampleErrorT,
  isOffline: boolean,
}

export const ErrorInfoDialog = ({ visible, hideDialog, errorData, isOffline }: OfflineInfoProps) => {
  const message = isOffline ? 'your connection seems to be offline' : errorData?.message;
  const code = isOffline ? 100 : errorData?.code;
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Data fetch error: {code}</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{message}</Paragraph>
        <Paragraph>Error while retrieving data please try again</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
