import { LightningElement } from 'lwc';
export default class App extends LightningElement {
  sessionId;
  state = 'list';

    handleNavigate(event) {
        this.sessionId = event.detail.sessionId;
    }

    get isStateList() {
        return this.state === 'list';
    }

    get isStateDetails() {
        return this.state === 'details';
    }
}