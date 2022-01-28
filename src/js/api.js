export default class API {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { 'Content-Type': 'application/json' };
  }

  addUser(nickname) {
    return fetch(this.url, {
      body: JSON.stringify(nickname),
      method: 'POST',
      headers: this.contentTypeHeader,
    });
  }

  addMessage(message) {
    return fetch(`${this.url}/message`, {
      body: JSON.stringify(message),
      method: 'POST',
      headers: this.contentTypeHeader,
    });
  }

  removeUser(nickname) {
    return fetch(`${this.url}/${nickname}`, {
      method: 'DELETE',
    });
  }
}
