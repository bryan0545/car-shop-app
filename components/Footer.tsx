import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={148}
            height={38}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            2024 - 99Cents Cars <br /> Original design by
            <Link
              href="https://www.instagram.com/javascriptmastery"
              className="text-base text-gray-700 ml-1"
            >
              @javascriptmastery
            </Link>
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="text-base text-gray-700">
          2024 - 99Cents Cars <br /> Original design by
          <Link
            href="https://www.instagram.com/javascriptmastery"
            className="text-base text-gray-700 ml-1"
          >
            @javascriptmastery
          </Link>
        </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
        </div>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
