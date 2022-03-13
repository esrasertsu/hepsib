import { createContext, useContext } from "react";
import { configure } from "mobx";
import LinkStore from "./linkStore";
import ModalStore from "./modalStore";

configure({enforceActions: 'always'});

export class RootStore {
  
    linkStore: LinkStore;
    modalStore:ModalStore;

    constructor() {
        this.linkStore = new LinkStore(this)
        this.modalStore = new ModalStore(this)
    }
}

export const RootStoreContext = createContext(new RootStore());


export function useStore(){
    return useContext(RootStoreContext);
}