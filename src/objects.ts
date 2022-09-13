// HOW TO CREATE OBJECT IN TS
let employe : {
    readonly id: number, 
    name: string,
    retire : (date : Date) => void
} = {
    id : 1, 
    name: "Anja",
    retire : (date : Date) => {
        console.log(date)
    }
};

// employe.id = 2 => CANNOT CHANGED BCS readonlu
employe.name = "Bambang"