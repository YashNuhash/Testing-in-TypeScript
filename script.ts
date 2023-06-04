const json = JSON.parse("60");
console.log(typeof json);

const Array: string[] = [];
Array.push("NUHASH","Polli");
console.log(Array);

const Array2: readonly string[] = ["ABCD"];
console.log(Array2);

let tuple: [number,boolean,string];
tuple = [90,true,"Spider-Monkey"];
console.log(tuple);

const car: {
    type: string,
    model: string,
    year: number
} = {
    type: "Tesla",
    model: "Model-X",
    year: 2017
};

car.type = "Ford";

console.log(car);

enum Space{
    Right=4,left,Up,Down
}

let direction = Space.Right;
console.log(Space.Right);

export{}