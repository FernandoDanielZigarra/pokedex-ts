export const getPokemonsDeleted = (key:any):any[] | [] =>{
    return localStorage.getItem(key)
}

export const setPokemonsDeleted = (key:any, data:any[]) =>{
    return localStorage.setItem(key, data)
}