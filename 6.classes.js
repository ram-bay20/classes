class Book {
     constructor(title,author,year){
          this.title = title;
          this.author = author;
          this.year = year;
     }

     summary(){
          return `${this.title} was written by ${this.author} in ${this.year}.`;
     }

     age(){
          const old = new Date().getFullYear()-this.year;
          return `The Book ${this.title} is ${old} years old.`;
     }

     change(newYear){
          this.year = newYear;
          this.revised = true;
     }

     static bookStore(){
          return 'Donald Blake Book Store';
     }
     
}

const book1 = new Book('Geetanjali', 'Rabindranath Tagore', '1907');

//console.log(book1);
//console.log(book1.summary());
//console.log(book1.age());
//book1.change(1913);
//console.log(book1);
//console.log(book1.summary());
//console.log(book1.age());

console.log(Book.bookStore());