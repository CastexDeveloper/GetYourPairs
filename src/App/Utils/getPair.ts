export function getPair3(a: any[],v: number){
    let pairsGotIt: any[] = [];
    let aCopy:any[]= a
    a.map((e: number)=> {
        let subtraction = v-e;
        aCopy = aCopy.filter((f)=> {
            if(subtraction == f){   
                let alreadyGotIt = pairsGotIt.find((i:any)=> i[1] == f)
                if(!alreadyGotIt){           
                pairsGotIt = [...pairsGotIt,[subtraction,e]]}
            }
            return f !== subtraction    
        })
    })
    return pairsGotIt;
}


