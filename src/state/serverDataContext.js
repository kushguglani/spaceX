import React, { useContext, useMemo } from 'react';

const ServerDataContext = React.createContext();

export const ServerDataProvider = (props) => {
  const value = useMemo(() => {
    return {
      data: props.value,
    };
  }, [props.value]);

  return (
    <ServerDataContext.Provider value={value}>
      {props.children}
    </ServerDataContext.Provider>
  );
};

export const useServerData = (fn) => {
  const context = useContext(ServerDataContext);

  if (fn) {
    return fn(context.data);
  } else {
    return context.data;
  }
};
