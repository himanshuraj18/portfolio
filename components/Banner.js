import SocialPill from '/components/SocialPill';
import { socialsList } from '/components/Lists'

export default function Banner() {
    return (
        <div className="w-full h-screen flex flex-col grid grid-cols-1 sm:grid-cols-2">
            <div className="col-span-1 flex flex-col mx-auto sm:mx-4 mt-auto sm:mt-0 mb-8 sm:mb-0">
                <img className="w-64 sm:w-80 h-64 sm:h-80 ml-0 sm:ml-auto object-cover rounded-lg border-4 border-pink-500 shadow-2xl" src="assets/profile_pic.jpg" />
            </div>
            <div className="col-span-1 flex flex-col mx-auto sm:mx-4 mb-auto sm:mb-0 mt-8 sm:mt-0">
                <span className="text-4xl sm:text-7xl font-medium text-center sm:text-left">
                    HIMANSHU RAJ
                </span>
                <span className="text-xl sm:text-2xl mt-6 text-center sm:text-left">
                    Incoming SWE-SRE at Google Dublin
                </span>
                <span className="text-xl sm:text-2xl mt-2 text-center sm:text-left">
                    Alumni, IIIT-Delhi
                </span>
                <div className="grid grid-cols-5 gap-4 mt-8 mr-0 sm:mr-auto ">
                    {
                        socialsList.map((social, index) => {
                            return (
                                <SocialPill key={index} {...social} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}