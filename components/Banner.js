import SocialPill from '/components/SocialPill';
import * as Lists from '/components/Lists'

const socialsList = Lists.socialsList;

export default function Banner() {
    return (
        <div className="w-full h-screen grid grid-cols-2 gap-3">
            <div className="col-span-1 flex p-12 my-auto">
                <img className="w-80 h-80 ml-auto object-contain rounded-lg border-4 border-pink-500 shadow-2xl" src="assets/profile_pic.jpg" />
            </div>
            <div className="col-span-1 flex flex-col my-auto">
                <span className="text-7xl font-medium">
                    HIMANSHU RAJ
                </span>
                <span className="text-2xl mt-6">
                    Incoming SWE-SRE at Google Dublin
                </span>
                <span className="text-2xl mt-2">
                    Alumni, IIIT-Delhi
                </span>
                <div className="grid grid-cols-5 gap-4 mt-8 mr-auto">
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