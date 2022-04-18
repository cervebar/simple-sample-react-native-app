import { createContext, useContext } from 'react';
import React from 'react';
import { ConnectionInfo } from './ConnectionInfo';

export const ConnectionContext = createContext<{ connection: ConnectionInfo }>({ connection: new ConnectionInfo() });

export const ConnectionProvider = ({ children }: {children: React.ReactNode}) => {
    const { connection } = useContext(ConnectionContext);
    return <ConnectionContext.Provider value={{ connection }}>{children}</ConnectionContext.Provider>;
};
