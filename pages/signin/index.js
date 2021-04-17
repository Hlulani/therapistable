import * as Component from 'components';
import Button from '@material-ui/core/Button';

export default function SignIn() {

    return (
        <div className="bg-white w-screen h-screen flex text-whit flex-col">
            <Component.Head>
                <title>therapistable</title>
            </Component.Head>

            {/* Heading */}
            <div className="bg-primary w-full h-24 p-4">
                <div className="lrg-btn">Hello World</div>
            </div>
            {/* end Heading */}

            <form  action="/" method="get" className="max-w-md p-2 bg-primary shadow-md m-4 rounded flex-col flex items-center">
                <h1>Sign in</h1>
                <input className="w-64 p-2 m-2 rounded border" type="text" name="username" placeholder="username" />
                <input className="w-64 p-2 m-2 rounded border" type="password" name="email" placeholder="password" />
                <div class="space-x-4 ...">
                <input className="p-2 rounded bg-secondary" type="submit" value="Sign in" />
                <input className="p-2 rounded bg-secondary" type="submit" value="sign up" />
                </div>

            </form>
        </div>
    )
}
