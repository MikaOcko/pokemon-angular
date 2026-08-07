export interface ApiResponse {
    infos: InfosResponse;
    results:unknown;
}

export interface InfosResponse{
    count:number;
    next:string|null;
    previous:string|null;
}
