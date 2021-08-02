import { App } from './app';
let app = new App();
app.init();
app.connectToDB();
app.listen();