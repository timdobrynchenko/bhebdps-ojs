class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null
    }
    fix() {
        this.state = this._state * 1.5
    }
    get state() {
        return this._state
    }
    set state(value) {
        if (value > 100) {this._state = 100}
        else if (value < 0) {this._state = 0}
        else {this._state = value}
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective"
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
        else {return console.log("Состояние книги плохое")}
    }

    findBookBy(type, value) {
        return this.books.find (book => book[type] === value) || null
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex (book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0]
        }
        return null
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {}
    }
    addMark(mark, subject) {
        if (mark > 5 || mark < 2) {
            return
        }
        else {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = []
            }
            this.marks[subject].push(mark)
        }
        
    }
    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
                return 0
            }
        else {
            let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0)
            let count = this.marks[subject].length
            return sum / count
        }
    }
    getAverage() {
        let subjects = Object.keys(this.marks)
        if (subjects.length === 0) {
        return 0
        }
        let sum = 0
        for (let subject of subjects) {
            sum += this.getAverageBySubject(subject)
        }
        return sum / subjects.length
    }
}