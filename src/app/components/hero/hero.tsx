import Link from "next/link";
const Ero = () => {

   
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='mt-4 lg:px-20'>मरती टैम दिख'री काली</h2>
            <video className='lg:w-3/4' width="100%" height="auto" controls autoPlay muted>
                <source src="https://media.stage.in/adsImages_NC/bbb_hr_teaser.mp4" type="video/mp4" />
            </video>
            <Link href="https://payment.stage.in/"
                className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded-md w-full lg:w-3/5 lg:px-7 lg:py-7'
            >
                ट्रायल शुरू करें
            </Link>
        </div>
    );
};

export default Ero;
