import Layout from '../components/Layout';
import Image from 'next/image';
export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.png"
            width={640}
            height={320}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 to-gray-600">city A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">test@test.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 to-gray-600">000-123-456</p>
        </div>
        <div className="mt-6 flex justify-around">
          <a
            href="https://nerdcave.com/tailwind-cheat-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 mr-3 text-blue-500"
              stroke="currentColor"
              fill="currentColor"
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
              />
            </svg>
          </a>
          <a
            href="https://nerdcave.com/tailwind-cheat-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3 text-brack-500"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              {' '}
              <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}
