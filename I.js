// I - Interface Segregation Principle (Принцип разделения интерфейса)
// Классы, которые наследуются от базового класса не должны зависить от методов БК, если они их не используют


// Допустим у нас есть базовый класс Animal, но он слишком обобщен и приходиться переопределять методы в дочерних классах,
// это можно исправить с помощью композитион api

/* class Animal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log(`${this.name} умеет ходить`)
    }

    swim() {
        console.log(`${this.name} умеет плавать`)
    }

    fly() {
        console.log(`${this.name} умеет летать`)
    }
}


class Dog extends Animal {
    fly() {
        return null
    }
}

class Eagle extends Animal {
    swim() {
        return null
    }
}

class Whale extends Animal {
    walk() {
        return null
    }

    fly() {
        return null
    }
}


const dog = new Dog('Bobik')

dog.walk()
dog.swim()
dog.fly()   // не логично - собака не умеет летать, переопределим метод fly в классе Dog


const eagle = new Eeagle('Orel')

eagle.walk()
eagle.swim() // не логично - орел не умеет плавать, переопределим метод swim в классе Eagle
eagle.fly()   


const whale = new Whale('Синий кит')

whale.walk() // не логично - кит не умеет ходить, переопределим метод walk в классе Whale
whale.swim() 
whale.fly()  // не логично - кит не умеет летать, переопределим метод fly в классе Whale */
 

// COMPOSITION API

class Animal {
    constructor(name) {
        this.name = name
    }
}


// Создадим объекты, определяющие соответсвующее поведение
const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`)
    }
}


class Dog extends Animal {
   
}

class Eagle extends Animal {
   
}

class Whale extends Animal {

}


// Расширяем функциональность классов путем их слияния с дополнительными объектами

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)


// И теперь если вызвать у собаки fly(), то будет ошибка, что и подразумевает правильное использование, 
// тем самым разработчик задает правило использования
const dog = new Dog('Bobik')

dog.walk()
dog.swim()
//dog.fly()   // не логично - собака не умеет летать, переопределим метод fly в классе Dog


const eagle = new Eeagle('Orel')

eagle.walk()
//eagle.swim() // не логично - орел не умеет плавать, переопределим метод swim в классе Eagle
eagle.fly()   


const whale = new Whale('Синий кит')

//whale.walk() // не логично - кит не умеет ходить, переопределим метод walk в классе Whale
whale.swim() 
//whale.fly()  // не логично - кит не умеет летать, переопределим метод fly в классе Whale */