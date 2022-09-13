// JAVASCRIPT
// number, string, bool, null, undifined, object

// TYPESCRIPT
// ..all js have + any, unknown, never, tuple


// TRADITIONAL TYPE
let sales : number = 123_456_789;
let course : string = "Belajar Typescript";
let isHard : boolean = false;
let nama = "Iqbal Humaidi";

function sayHai(name: string){
    console.log(name);
}

// ANY TYPE (NOT RECOMENDED IN TYPESCRIPT)
let level;
level = 1;
level = "dua";

function render(document: any) {
    console.log(document)
}