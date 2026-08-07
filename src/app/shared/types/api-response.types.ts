export interface ApiResponse<T> {
    infos: InfosResponse;
    results:T;
}

export interface InfosResponse{
    count:number;
    next:string|null;
    previous:string|null;
}