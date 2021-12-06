import './news.css';
import DataNews from '../../types/dataNews';

class News {
    draw(data: DataNews[]): void {
        const news: DataNews[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) newsItem.classList.add('alt');

            const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsAuthor.textContent = item.author || item.source.name;

            const newsDate = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsTitle.textContent = item.title;

            const newsSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsSource.textContent = item.source.name;

            const newsContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsContent.textContent = item.description;

            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
