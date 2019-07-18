export default class BookstoreService {

  data = [
    {
      id: 1,
      label: 'Learning JavaScript',
      author: 'Ethan Brown',
      price: '32$',
      image: 'img/image-1.jpg'
    },
    {
      id: 2,
      label: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      price: '32$',
      image: 'img/image-2.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.25) {
          resolve(this.data);
        }
        else {
          reject(new Error('Something bad happened'));
        }
      }, 700);
    });
  }
}