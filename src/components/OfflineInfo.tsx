import React from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';

type OfflineInfoProps = {
  visible: boolean,
  hideDialog: () => void,
}

export const OfflineInfo = ({ visible, hideDialog }: OfflineInfoProps) => {
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Offline</Dialog.Title>
      <Dialog.Content>
        <Paragraph>your connection seems to be offline</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
