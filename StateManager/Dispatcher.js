import React from "react";
import StoreContext from "./Store";

export function useDispatcher() {
  const [store, setStore] = useContext(StoreContext);

  function dipatch(action) {
    let obj = {};
    try {
      for (let key in store) {
        if (key && key !== "reducers")
          obj[key] = store.reducers[key](store[key], action);
      }
      obj["reducers"] = store.reducers;
      setStore(obj);
    } catch (err) {
      console.log(err);
    }
  }
  return [disPatch];
}

export function useStore() {
  const [store] = useContext(StoreContext);
  return store;
}

export function useReducerCombiner(obj = {}) {
  return obj;
}
