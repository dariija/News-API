import './news.css';
import DataNews from '../../types/dataNews';

class News {
    draw(data: DataNews[]): void {
        const news: DataNews[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            const newsTitle: HTMLElement = newsClone.querySelector('.news__meta-photo');
            newsTitle.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsAuthor: HTMLElement = newsClone.querySelector('.news__meta-author');
            newsAuthor.textContent = item.author || item.source.name;

            const newsDate: HTMLElement = newsClone.querySelector('.news__meta-author');
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle: HTMLElement = newsClone.querySelector('.news__description-title');
            newsDescriptionTitle.textContent = item.title;

            const newsSource: HTMLElement = newsClone.querySelector('.news__description-source');
            newsSource.textContent = item.source.name;

            const newsContent: HTMLElement = newsClone.querySelector('.news__description-content');
            newsContent.textContent = item.description;

            const newsReadMore: HTMLElement = newsClone.querySelector('.news__read-more a');
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer: HTMLElement = document.querySelector('.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
