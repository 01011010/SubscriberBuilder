import Model from "./Model";
import Post from "./Post";

export default class User extends Model {
  resource() {
    return "users";
  }

  posts() {
    return this.hasMany(Post);
  }

  // computed properties :)
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  // methods :)
  makeBirthday() {
    this.age += 1;
  }
}
