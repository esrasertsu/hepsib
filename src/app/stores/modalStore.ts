import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./rootStore";

export default class ModalStore {
    rootStore : RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeObservable(this);

    }

    @observable.shallow modal = {
        open: false,
        body: null,
        header: null,
        footer:null,
        className:""
    }

    @action openModal = (header:any, content: any, footer:any,className?:string
      //  redirectPage?:string
        ) =>{
        this.modal.open = true;
        this.modal.body = content;
        this.modal.header = header;
        this.modal.footer = footer;
        this.modal.className = className || "";
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
        this.modal.header = null;
        this.modal.footer = null;
       
    }
}