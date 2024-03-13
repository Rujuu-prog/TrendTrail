import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import React from 'react';

// Alert コンポーネントの props の型を拡張する
interface ErrorAlertProps extends React.ComponentPropsWithoutRef<typeof Alert> {
  errorMsg: string;
}

export function ErrorAlert({ errorMsg, ...alertProps }: ErrorAlertProps) {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="light" color="red" title="Error" icon={icon} {...alertProps}>
      {errorMsg}
    </Alert>
  );
}
