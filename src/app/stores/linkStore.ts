import { action, computed, makeObservable, observable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { ILink, ILinkForm } from "../models/links";


export default class LinkStore{
    rootStore: RootStore
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeObservable(this);
        reaction(
            () => this.activePage,
            () => {
                    this.getSortedLinks();
            }
        )

        reaction(
            () => this.predicate,
            () => {
                    this.getSortedLinks();
            }
        )
    }
    @observable LIMIT = 5;

    @observable link: ILink | null = null;
    @observable loadingLinks = false;
    @observable activePage = 0;
    @observable linkCount = 0;
    @observable offset = 0;
    @observable predicate: "most" | "less" = "most";

    @observable linkList: ILink[] = [];
    @observable linkRegistery = new Map<string,ILink>();

    @observable toastList: any[] = []; //son saniye yapabildim kendisine özel store ve interface yaratamadım aceleyle
 
    @action setLoadingCategories = (lp : boolean) =>{
        this.loadingLinks = lp;
    }

    @action setPredicate = (pr : "most" | "less") =>{
        this.predicate = pr;
    }

    @action setLinkList = (list : ILink[]) =>{
        this.linkList = list;
    }

    @action setOffset = (offset : number) =>{
        this.offset = offset;
    }

    @action setActivePage= (index:number) =>{
        this.activePage = index;
    }

    @action setToastList= (list:any) =>{
        this.toastList = list;
    } 
    @computed get totalPages(){
        return Math.ceil(this.linkCount / this.LIMIT);
    }

    
    @computed get sortedLinksByVote(){
        return Array.from(this.linkRegistery.values()).sort((a,b) => b.votes - a.votes)
     }

     @computed get lessSortedLinksByVote(){
        return Array.from(this.linkRegistery.values()).sort((a,b) => a.votes - b.votes)
     }


     
    @action getSortedLinks = async () =>{
        debugger;
        if(this.predicate === "most")
          this.setLinkList(this.sortedLinksByVote.slice(this.offset, this.offset + this.LIMIT));
        else 
          this.setLinkList(this.lessSortedLinksByVote.slice(this.offset, this.offset + this.LIMIT));

    }
    
    @action prevPage()
    {
        if (this.activePage > 1) {
            this.setActivePage(this.activePage--);
        }
    }

    @action nextPage()
    {
        if (this.activePage < this.totalPages) {
            this.setActivePage(this.activePage++);

        }
    }


    
 
    @action loadLinks = async () =>{
        this.loadingLinks = true;
        try {
          // Eğer API'dan çekiyor olsaydım bu tarz bi agent methoduna giderdim.
          //  const categoryList = await agent.Votes.list();
          //  runInAction(()=>{
               //burda da gelen datayı store ederdim.
           // })
           const links = window.localStorage.getItem('links');

           const linkList = JSON.parse(links);
           this.linkCount = linkList.length;
           linkList.forEach((link) =>{
               this.linkRegistery.set(link.linkUrl, link);
           });

           this.getSortedLinks();
           this.loadingLinks = false;
        } catch (error) {
            runInAction(()=>{
                this.loadingLinks = false;
            })
            console.log(error);
        }
    
    }

    @action saveLink = async (values:ILinkForm) =>{
        this.loadingLinks = true;

            var existingLS = localStorage.getItem('links');
            let existingArray = existingLS ? JSON.parse(existingLS) : [];

            let newLink : ILink = {
                linkName: values.linkName,
                linkUrl: values.linkUrl,
                votes:0
            }
            var existingLink = existingArray.length >0 ? existingArray.filter(x => x.linkUrl === newLink.linkUrl)[0] : null;
            if(existingLink)
            {
                this.loadingLinks = false;
                return false;
            }else{
                existingArray.push(newLink)
                localStorage.setItem('links', JSON.stringify(existingArray))
                this.linkCount =this.linkCount+1 ;

               this.linkRegistery.set(values.linkUrl, newLink);
               this.getSortedLinks();

               this.loadingLinks = false;
               return true;
            }
           

    }

    @action upVotes = (url:string) =>
    {
        let currentLink = this.linkList.filter(a => a.linkUrl === url)[0];

        currentLink.votes = currentLink.votes + 1;
        this.linkRegistery.delete(currentLink.linkUrl);
        this.linkRegistery.set(currentLink.linkUrl, currentLink);
        this.editLink(currentLink);

    }

    
    @action downVotes = (url:string) =>
    {
        let currentLink = this.linkList.filter(a => a.linkUrl === url)[0];

        currentLink.votes = currentLink.votes - 1;
        this.linkRegistery.delete(currentLink.linkUrl);
        this.linkRegistery.set(currentLink.linkUrl, currentLink);
        this.editLink(currentLink);

    }

    @action deleteLink = (url:string) =>
    {
        
        var existingLS = localStorage.getItem('links');
        let existingArray = existingLS ? JSON.parse(existingLS) : [];

        var existingLinks = existingArray.filter(x => x.linkUrl !== url);
        localStorage.setItem('links', JSON.stringify(existingLinks));
        this.linkCount =this.linkCount-1 ;
        
        this.linkList = this.linkList.filter(a => a.linkUrl !== url);
        this.linkRegistery.delete(url);
        this.getSortedLinks();

    }

    @action editLink = async (link:ILink) =>{
            debugger;
            var existingLS = localStorage.getItem('links');
            let existingArray = existingLS ? JSON.parse(existingLS) : [];

        
            var existingLink = existingArray.filter(x => x.linkUrl === link.linkUrl)[0];
            if(!existingLink)
            {
                //error mesajı göster
            }else{
                existingLink["votes"] = link.votes;
                localStorage.setItem('links', JSON.stringify(existingArray))
                this.getSortedLinks();
            }
           

    }
}