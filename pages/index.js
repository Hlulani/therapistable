import * as Component from 'components';

export default function Index() {
    const router = Component.useRouter();
    const [name,setName] = Component.useState()

    Component.useEffect(() => {
        
        let _q = router.query;

        console.log(_q)

        return () => {
            
        }
    }, [router])
    return (


        <div className="bg-white w-screen h-screen flex text-white">
            <Component.Head>
                <title>therapistable</title>
            </Component.Head>
            
            <div className="bg-primary w-full h-24 p-4">
                <div className="rounded w-32 bg-secondary p-2">Hello World</div>
            </div>


        </div>

    )
}
