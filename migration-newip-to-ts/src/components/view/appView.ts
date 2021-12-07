import News from './news/news';
import Sources from './sources/sources';
import DataNews from '../types/dataNews';
import DataSources from '../types/dataSources';
import IData from '../types/interfaceData';
import Button from '../buttons/button';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IData): void {
        const values: DataNews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IData): void {
        const values: DataSources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    drawUpButton() {
        const button = new Button();
        button.createUpButton();
    }
}

export default AppView;
