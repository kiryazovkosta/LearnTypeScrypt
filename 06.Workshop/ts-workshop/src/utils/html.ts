export class HtmlRenderer {
    static render(template: string) {
        const appElement = document.getElementById('app');

        if (appElement) {
            appElement.innerHTML = template;
        }
    }
}