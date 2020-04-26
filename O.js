// O - Open Close Principle (Принцип Открытого Закрытия)
// Класс должен быть открыт для рассширения, но быть закрытым для модификации
// Это означает что, вы никогда не будите изменять старый код при добавлении новой функциональности




// Допустим у нас есть фигурки и стоит задача посчтиать площадь фигур
// Затем заказчик говорит, что у них появилась еще одна фигура и нам приходиться вносить изменения в уже существующий класс AreaCalculator
// А теперь представьте что у нас появляется 2000 новых фигур и для каждой из наих придется вносить изменения в класс AreaCalculator,
// чтобы избежать такой проблемы, применим принцип Open Close Principle, создадим класс Shape, он будут родителем для всех фигур

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        //this.type = 'square'
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        //this.type = 'circle'
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        //this.type = 'rect'
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

const square = new Square(2)
const circle = new Circle(3)


class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sumAreaShapes() {
        return this.shapes.reduce((acc, shape) => {
            /* if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if (shape.type === 'square') {
                acc += shape.size ** 2
            }
            else if (shape.type === 'rect') {
                acc += shape.width * shape.height
            }
            */

            acc += shape.area() 
            
            return acc
            
        }, 0)
        
    }
}

const areaCalculator = new AreaCalculator([square, circle])

console.log(areaCalculator.sumAreaShapes())


