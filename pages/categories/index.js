import * as Component from 'components';

export default function Categories() {

    return (
        <div className="bg-white w-screen h-screen flex text-whit flex-col">
            <Component.Head>
                <title>therapistable</title>
            </Component.Head>

            {/* Heading */}
            <div className="bg-primary w-full h-24 p-4">
                <div className="lrg-btn">Categories</div>
            </div>
            {/* end Heading */}
            <div>

                <div class="mt-10">
                    <h1 class="text-2x1 font-bold text-center" >
                        <span class="text-indigo-500" >What kind of therapy would you like</span>
                    </h1>
                </div>

                <div class="mt-10 items-center flex justify-center">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full object-cover md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                Emotionally Focused Therapy
                            </a>
                        </div>
                        <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full object-cover md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Family Systems Therapy
                            </a>
                        </div>
                         <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full object-cover md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Social Recovery Therapy
                            </a>
                        </div>   
                        <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full object-cover md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Neurofeedback
                            </a>
                        </div>  
                         <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full object-cover md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Relational Therapy
                            </a>
                        </div> 
                         <div class="bg-gray-400 p-3 rounded font-bold">
                            <div class="md:flex-shrink-0">
                                {/* <img class="h-48 w-full object-cover md:w-48" src="../../img/aroma-therapy-icon.png" /> */}
                                <img class="h-48 w-full  md:w-48" src="https://iconarchive.com/show/ios7-icons-by-icons8/Healthcare-Therapy-icon.html" alt="" />
                            </div>
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Psychoanalytic Therapy
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
