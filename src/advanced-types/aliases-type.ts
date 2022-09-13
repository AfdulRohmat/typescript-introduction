// with DRY (Dont Repeate Yourself) Principle

// type aliases is like inherintance in OOP 

type Employe = {
    readonly id: number, 
    name: string,
    retire : (date : Date) => void
}

let karyawan1 : Employe = {
    id : 1, 
    name: "Anja",
    retire : (date : Date) => {
        console.log(date)
    }
};

let karyawan2 : Employe = {
    id : 2, 
    name: "Ria",
    retire : (date : Date) => {
        console.log(date)
    }
};