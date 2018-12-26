import React from 'react'

const FetchContext = React.createContext();

export const FetchProvider = FetchContext.Provider;
export const FetchConsumer = FetchContext.Consumer;