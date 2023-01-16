export const Login=() => {
    return (
        <form>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" name="email" id="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="**********" name="password" id="password" />
            <button>Log In</button>
        </form>
    )
}