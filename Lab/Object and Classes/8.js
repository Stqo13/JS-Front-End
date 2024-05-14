function solve(input){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const item of input) {
        let catInfo = item.split(' ');

        let cat = new Cat(catInfo[0], catInfo[1]);
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);