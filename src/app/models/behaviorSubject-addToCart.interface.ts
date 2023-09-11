export interface OrderCount {
    cartTotal:number;
    favouriteTotal:number;
}


export interface ITEMS {
    id?:number,
    item:string,
    action:{
        iscart:boolean,
        isFavourite:boolean,
    }
}