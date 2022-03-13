import { createContext, useContext } from "react";
import { configure } from "mobx";
import LinkStore from "./linkStore";

configure({enforceActions: 'always'});

export class RootStore {
  
    linkStore: LinkStore;

    constructor() {
        this.linkStore = new LinkStore(this)
    }
}

export const RootStoreContext = createContext(new RootStore());


export function useStore(){
    return useContext(RootStoreContext);
}