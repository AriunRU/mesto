export class UserInfo {
  constructor({ name, job, avatar }) {
    this._name = document.querySelector(name);
    this.job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this.job.textContent,
    };
  }

  letUserInfo(name, job) {
    this._name.textContent = name;
    this.job.textContent = job;
  }

  letUserAvatar(avatar) {
    this._avatar.src = avatar
  }
}