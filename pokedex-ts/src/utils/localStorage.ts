export const getPokemonsDeleted = (key:string):string[] | [] =>{
    return JSON.parse(localStorage.getItem(key)!)
}

export const setPokemonsDeleted = (key:string, data:string[]) =>{
    return localStorage.setItem(key, JSON.stringify(data))
}