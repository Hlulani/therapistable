import * as Component from 'components';
//import background from "../img/2.jpeg";


export default function Categories() {

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


            <div>
            <p class="font-serif ...">
                What kind of therapy would you like
             </p>
             <div class="grid grid-cols-3 ">
            <div>1</div>
            <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
            <img class="w-8 ..." src="https://picsum.photos/536/354" alt="Workplace" width="600" />
            <p class="text-indigo-600 group-hover:text-gray-900 ...">Clinical Psychologist</p>
            <p class="text-indigo-500 group-hover:text-gray-500 ...">This is a therapy template</p>
            </div>

            <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
            <img class="w-8 ..." src="https://picsum.photos/536/354" alt="Workplace" width="600" />
            <p class="text-indigo-600 group-hover:text-gray-900 ...">Clinical Psychologist</p>
            <p class="text-indigo-500 group-hover:text-gray-500 ...">This is a therapy template</p>
            </div>

            <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
            <img class="w-8 ..." src="https://picsum.photos/536/354" alt="Workplace" width="600" />
            <p class="text-indigo-600 group-hover:text-gray-900 ...">Clinical Psychologist</p>
            <p class="text-indigo-500 group-hover:text-gray-500 ...">This is a therapy template</p>
            </div>
            <div>6</div>
            </div>
            </div>
     
        </div>
    )
}
