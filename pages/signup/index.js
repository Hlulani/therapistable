import * as Component from 'components';


export default function SignUp() {

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

            <form className="max-w-md p-2 bg-primary shadow-md m-4 rounded flex-col flex items-center">
                <h1>Sign Up</h1>
                <input className="w-64 p-2 m-2 rounded border" type="text" placeholder="username" />
                <input className="w-64 p-2 m-2 rounded border" type="email" placeholder="email" />
                <input className="p-2 rounded bg-secondary" type="button" value="submit" />
            </form>

        </div>

    )
}
