import React, { useEffect, useState } from "react";

export const StoreContext = createContext({});

function Store(props) {
  const [store, setStore] = useState(undefined);

  useEffect(() => {
    const createStore = (obj) => {
      let toStore = {};
      for (let key in obj) {
        if (key) toStore[key] = obj[key](undefined, { type: "none" });
      }
      toStore.reducers = obj;
      setStore(toStore);
    };
    createStore(props.store);
  }, [props.store]);

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default Store;
