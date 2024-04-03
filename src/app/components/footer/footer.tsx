import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className="text-center mt-4 px-2 lg:mt-16">
      <div className='flex flex-col items-start gap-y-4'>
        <p>Connect with us</p>
        <div className="mb-5">
          <Link href="https://twitter.com/yourcompany">
            <FontAwesomeIcon className='text-black hover:text-blue-600 mx-3 text-white text-3xl lg:w-1/5' icon={faFaceAngry}/>
          </Link>
          <Link href="https://www.facebook.com/yourcompany">
            <FontAwesomeIcon className='text-black hover:text-blue-800 mx-3 text-white text-3xl lg:w-1/15' icon={faFaceAngry}/>
          </Link>
          <Link href="https://www.youtube.com/yourcompany">
            <FontAwesomeIcon className='text-black hover:text-red-600 mx-3 lg:w-1/5 text-white text-3xl' icon={faFaceAngry} />
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-2 text-base'>
        <Link href="https://www.stage.in/privacy">
          Privacy Policy
        </Link>
        <Link href="https://www.stage.in/settings/contact-us">
          Contact Us
        </Link>
        <Link href="https://www.stage.in/terms">
          Terms of Use
        </Link>
        <Link href="https://www.stage.in/refundCancel">
          Refund Policy
        </Link>
      </div>
      <p className='mt-4 text-base pb-2 text-left'>©2024 STAGE Technologies Pvt Ltd</p>
    </footer>
  );
}