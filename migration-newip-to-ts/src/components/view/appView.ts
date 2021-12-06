import News from './news/news';
import Sources from './sources/sources';
import DataNews from '../types/dataNews';
import DataSources from '../types/dataSources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: DataNews[] }): void {
        const values: DataNews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: DataSources[] }): void {
        const values: DataSources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
