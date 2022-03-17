import DataSources from './dataSources';
import DataNews from './dataNews';

interface IData {
    sources?: DataSources[];
    articles?: DataNews[];
}

export default IData;
