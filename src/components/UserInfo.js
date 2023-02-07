export class UserInfo {
  constructor(name, job) {
    this._userName = document.querySelector(name)
    this._userJob = document.querySelector(job)
  }

  getUserInfo() {
    return { name: this._userName.textContent, job: this._userJob.textContent }
  }

  setUserInfo(data) {
    this._userName.textContent = data.name
    this._userJob.textContent = data.job
  }
}