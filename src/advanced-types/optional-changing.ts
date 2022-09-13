type Custumer = {
    birthday : Date,
    motherName? : string,
}

function getConstumer(id: number): Custumer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getConstumer(0)

// Using optional Operatore bcs return can be null
console.log(customer?.birthday)
console.log(customer?.motherName)

