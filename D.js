// D - Dependency Inversion Principle (Принцип обращения зависимостей)
// Верхний уровень модулей не должен зависить от абстракций модулей нижнего уровня.
// И что вообще любые уровни должны зависит от абстракций а не от конкретики.



// А потом приходит заказчик и говорит что теперь мы не будем хранить данные на удаленном сервере, 
// а все необходимо хранить на клиенте в LS
// Как бы действовал разрабочик, скорее всего он бы создал новый класс LS с нужной функциональностью,
// а затем бы расширил или изменил класс DB, тоесть постоянно прихордится все изменять

// Используя Dependency Inversion Principle, разработчику необходимо создать новый интерфейс (FetchClient), с которым бы взаимодействовали
// все сущности: Fetch, LS, Database
class Fetch {
    request(a) {
        //return fetch(url).then(r => r.json())
        return Promise.resolve('Data from fetch analog')
    }
}


class LS {
    get(a) {
        const dataFromLS = 'Data from LS analog'
        //return localStorage.getItem('key')
        return dataFromLS
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet(a) {
        return this.fetch.request(a)
    }
}

class LSClient {
    constructor() {
        this.LS = new LS()
    }

    clientGet(a) {
        return this.LS.get(a)
    }
}

/* class Database {

    constructor() {
        this.fetch = new Fetch()
        this.LS = new LS()
    }

    getData(a) {
        //return this.fetch.request(a)
        return this.LS.get(a)
    }
}
const db = new Database()

console.log(db.getData('url-key'))

*/


class Database {
    constructor(client) {
        this.client = client
    }
    getData(a) {
        //return this.fetch.request('vk.com')
        return this.client.clientGet(a)
    }
}

const db = new Database(new LSClient())
//const db = new Database(new FetchClient())

console.log(db.getData('url-key'))

