let articles = [{
    date: '15 Jun',
    title: 'I like to eat',
    author: 'Cookie Monster'
}, {
    date: '16 Jun',
    title: 'I ate too many cookies',
    author: 'Cookie Monster'
}, {
    date: '17 Jun',
    title: 'I feel sick',
    author: 'Cookie Monster'
}, {
    date: '18 Jun',
    title: 'No more cookies',
    author: 'Cookie Monster \'s Mom'
}, {
    date: '19 Jun',
    title: 'Awe MOM!',
    author: 'Cookie Monster'
}, {
    date: '20 Jun',
    title: 'I snuck a cookie',
    author: 'Cookie Monster'
}];

let tbody = document.querySelector('tbody');
let content = '';
articles.forEach(article => {
    content += `<tr>
                    <td> ${article.date} </td>
                    <td> ${article.title} </td>
                    <td> ${article.author} </td>
                </tr>`;
});
tbody.innerHTML = content;
