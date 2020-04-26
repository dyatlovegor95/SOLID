//S - Single Rsponsibility Principle (Единый принцип ответственности)
//Один класс отвечает за одну функциональность, поведение


class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    /* toHTML() {
        return `
            <div class="news">
                <h1>${this.title}</h1>
                <p>${this.text}</p>
            </div>
        `
    }

    toJSON() {
        return JSON.stringify({
            title: this.title,
            text: this.text,
            modified: this.modified
        }, null, 2)
    } */
}

const news = new News('Путин', 'Новая конституция')

//console.log(news)
//console.log(news.toHTML())
//console.log(news.toJSON())
// news.toHTML() news.toJSON() нарушение принципа, класс news по функционалу должен отвечать за создание и обновление одной новости,
// но он не должен заниматься выводом данных в разных форматах, да и вообще созданием структуры html, 
// функция отображения больше бы подошла классу newPrinter


// Применение класса newPrinter может быть связанно с поддержкой старых платформ либо с разнородностью форматов данных поступающих на вход/выход
class newPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

const printer = new newPrinter(news)

console.log(printer.html())
console.log(printer.json())
console.log(printer.xml())


