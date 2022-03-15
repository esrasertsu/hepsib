export interface ILinkForm{
    linkName:string;
    linkUrl:string;
}

export interface ILinksEnvelope {
    votes: ILink[];
    totalVoteCount: number;
}


export interface ILink{
    linkName:string;
    linkUrl:string;
    votes:number;
    createdDate:Date;
}