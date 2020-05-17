class Book {
    constructor(title, gender, year, author){
        this.title = title;
        this.gender = gender;
        this.year = year;
        this.author = author;
    }
}

class UI {
    //Upload book
    addBook = (book) =>{
        const bookList = document.getElementById('book-list')
        const infoBook = document.createElement('DIV')
        infoBook.className+='col-md-6'
        infoBook.innerHTML = `
            <div class="card mb-4">
                <div class="card-header">
                    <h4>${book.title}</h4>
                </div>
                <div class="list-group list-group-flush">
                    <li class="list-group-item">${book.gender}</li>
                    <li class="list-group-item">${book.year}</li>
                    <li class="list-group-item">${book.author}</li>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-danger btn-block" name="delete" >Delete</a>
                </div>
            </div>
        `
        bookList.appendChild(infoBook)

    }
    resetForm = () =>{
        document.getElementById('book-form').reset()
    }

    deleteBook = (element) =>{
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
        }
    }
    message = (message, cssClass) =>{
        const div = document.createElement('DIV')
        div.className = `alert alert-${cssClass} mt-4`
        div.append(document.createTextNode(message))
        //Showing in DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div, app)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
}

//Dom Events

document.getElementById('book-form').addEventListener('submit',(e)=>{
    
    const title = document.getElementById('title').value;
    const gender = document.getElementById('gender').value;
    const year = document.getElementById('year').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, gender, year, author)

    const ui = new UI()
    ui.addBook(book)
    ui.resetForm()
    
    ui.message('book successfully uploaded','success')

    e.preventDefault()
})

document.getElementById('book-list').addEventListener('click',(e)=>{
    const ui = new UI()
    ui.deleteBook(e.target)
    ui.message('deleted book','danger')
})
