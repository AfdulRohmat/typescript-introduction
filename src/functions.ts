function sayHello (name : string) : string {
    return `Hello ${name}`
}

function calculateTax (income: number) : number {
    if (income > 20){
        return 100
    }else {
        return 90
    }
}

// NOT RECOMENDED
// function nums(num1 : number, num2: number) {
//     if(num1 > num2){
//         return num1 + num2
//     }
// }

// FUNCTION WITH DEFAUT PARAMETER
function speed(value: number, vehicle = "Toyota") : string {
    return `${vehicle} have speed : ${value}`
}

speed(200) 
speed(200, "Supra") 
