import './sources.css';
import DataSources from '../../types/dataSources';

class Sources {
    draw(data: DataSources[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources: HTMLElement = document.querySelector('.sources');
        sources.append(fragment);
    }
}

export default Sources;
