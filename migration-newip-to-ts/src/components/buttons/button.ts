class Button {
    container: HTMLDivElement;

    constructor() {
        this.container = document.createElement('div');
    }

    createUpButton(): void {
        this.container.classList.add('up-button', 'hide');

        const arrow: HTMLDivElement = document.createElement('div');
        arrow.classList.add('arrow-icon');
        this.container.append(arrow);

        const body = document.querySelector('body') as HTMLBodyElement;
        body.append(this.container);

        this.container.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                this.container.classList.remove('hide');
                this.container.classList.add('show');
            }

            if (window.pageYOffset < 200) {
                this.container.classList.add('hide');
                this.container.classList.remove('show');
            }
        });
    }
}

export default Button;
