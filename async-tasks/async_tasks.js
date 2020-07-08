const result = 'https://codepen.io/artskadin/pen/ExPEodY'

// let result = '';
// const values = Array.from(document.querySelectorAll('#values li'), num => num.textContent)
// const URLs = Array.from(document.querySelectorAll('#urls li'), link => link.textContent)
// document
//   .querySelector('button')
//   .addEventListener('click',
//   async ({ target: t }) => { 
//     let index = 0
//     let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
//     let requestList = URLs.map(
//       () => new AsyncFunction('i', "return fetch(`${URLs[i]}${values[i]}/${result}`).then(res => res.text())")
//     )

//     for (let request of requestList) {
//       let response = await request(index)
//       result = new DOMParser().parseFromString(response, "text/html").getElementsByTagName('span')[0].textContent
//       console.log(result)
//       index += 1
//     }
//     t.textContent = `Результат: ${result}`;
//   }
// ); 