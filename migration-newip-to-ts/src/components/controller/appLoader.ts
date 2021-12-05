import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ae515d06bbfd46d7bfdc2197d73d14ce', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
