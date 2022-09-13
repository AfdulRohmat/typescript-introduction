function kgToG(weight: number | string) : number {
    // Narrowing
    if(typeof weight === "number")
        return weight * 1000
    else
        return parseInt(weight) + 1000
}

kgToG(10)
kgToG("10")