export interface Region {
    name:string;
    url:string;
}

export interface RegionLocations{
    id:number;
    locations:Location[];
    name:string;
}

export interface Location{
    name:string;
    url:string;
}