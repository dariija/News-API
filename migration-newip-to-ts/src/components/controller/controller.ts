import AppLoader from './appLoader';
import Callback from '../types/callback';
import DataNews from '../types/dataNews';
import DataSources from '../types/dataSources'

class AppController extends AppLoader {
    getSources(callback: Callback <{sources: DataSources[]}>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }
    
    getNews(e: Event, callback: Callback <{articles: DataNews[]}>): void {
        let target: Element = e.target as Element;
        const newsContainer: Element = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
