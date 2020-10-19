const getTemplate = () => {
    return `
        <div class="select__input">
            <span>Text</span>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                <li class="select__item">1</li>
                <li class="select__item">2</li>
                <li class="select__item">3</li>
                <li class="select__item">4</li>
                <li class="select__item">5</li>
                <li class="select__item">6</li>
                <li class="select__item">7</li>
                <li class="select__item">8</li>
            </ul>
        </div>
    `;
};

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
    }

    open() {
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }
}