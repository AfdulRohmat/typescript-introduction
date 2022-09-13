// BY DEFAULT, TS IS STRIC ABOUT NULL VALUE. ITS MEAN WE STRONGLY RECOMENDED TO ALWAYS PASSING A VARIABLE WITH A VALUE INSTEAD A NULL

function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("Holla, its calling when param is null or undifined")
}

greet("Riaaa")
greet(null) 
greet(undefined)

