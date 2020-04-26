// L - Liskov Substitution Principle (Принцип замещения Лискова)
// Функции (классы, сущности) которые имеют базовый тип, должны уметь с ним взаимодействовать +
// взаимодействовать с подтипами данного типа, незная ничего о них




// Рассмотрим чисто идеалогический пример примения данного принципа, он будет заключаться в правильном выделение сущностей и их связей
class Persone {
    /* access() {
        console.log('У тебя есть доступ')
    } */
}

class Member extends Persone {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Persone {
    idGuest = true
}

/* class Frontend extends Persone {
    createFrontend() {

    }
}

class Backend extends Persone {
    createBackend() {

    }
}

class PersoneFromAnyCompany extends Persone {
    access() {
        throw new Error('У тебя нет доступа, ты из другой компании')
    }
} */

class Frontend extends Member {
    createFrontend() {

    }
}

class Backend extends Member {
    createBackend() {

    }
}

class PersoneFromAnyCompany extends Guest {
    access() {
        throw new Error('У тебя нет доступа, ты из другой компании')
    }
}


function openSecretDoor(persone) {
    persone.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
//openSecretDoor(new PersoneFromAnyCompany())  // Нельзя применить тупо из идеалогических соображений


// Error, чтобы этого избежать нужно применить принцип Liscov
// Просто наследоваться от человека Persone будет неккоректно, поскольку даже по смыслу человек не всегда являеться работником компании
// Мы можем добавить еще одни уровень абстракции






// Рассмотрим 

class Component {
    /* render() {
        return `
            <div>Component</div>
        `
    } */
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `
            <div>Component</div>
        `
    }
}

class HigherOrderComponent extends Component {

}

/* class HeaderComponent extends Component {
    onInit() {

    }
}

class FooterComponent extends Component {
    afterInit() {

    }
}


// Хоки принимают один компонент на вход, а возвращают другой, уже модифицированный, так что у него метода рендера не должно быть
class HOC extends Component {
    render() {
        throw new Error('Сделать невозможно')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
} */

class HeaderComponent extends ComponentWithTemplate {
    onInit() {

    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {

    }
}


// Хоки принимают один компонент на вход, а возвращают другой, уже модифицированный, так что у него метода рендера не должно быть
class HOC extends HigherOrderComponent {
    /* render() {
        throw new Error('Сделать невозможно')
    } */

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
//renderComponent(new HOC())  // Эта запись невозможно исходя из логики следую принципу Liskov