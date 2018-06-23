export default function getArticles() {
    return fetch('js/articles/articles.json')
        .then(response => response.json())
        .then(showArticles)
        .catch(showError);
}

function showArticles(articles) {
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
}

function showError(err) {
    console.log(err);
    document.querySelector('main').innerHTML = err;
}

