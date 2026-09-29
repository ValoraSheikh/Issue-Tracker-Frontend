export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>
          <input type="text" name="username" placeholder="Username" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}