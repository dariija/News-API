import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'ae515d06bbfd46d7bfdc2197d73d14ce',
        });
    }
}

export default AppLoader;
