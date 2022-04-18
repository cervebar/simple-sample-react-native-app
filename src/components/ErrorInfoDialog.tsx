import React from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';

type OfflineInfoProps = {
  visible: boolean,
  hideDialog: () => void,
}

export const ErrorInfoDialog = ({ visible, hideDialog }: OfflineInfoProps) => {
  console.log('kvaErrorInfoDialog:',visible);
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Data fetch error</Dialog.Title>
      <Dialog.Content>
        <Paragraph>Error while retrieving data please try again</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
