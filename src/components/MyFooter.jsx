import { Footer } from "flowbite-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function MyFooter() {
  return (
    <Footer container className="bg-black rounded-none mt-8">
      <div className="w-full text-center">
        <div className="w-full">
          <Footer.LinkGroup className="justify-center text-xl">
            <Footer.Link href="#">
              <FaFacebook />
            </Footer.Link>
            <Footer.Link href="#">
              <FaInstagram />
            </Footer.Link>
            <Footer.Link href="#">
              <FaYoutube />
            </Footer.Link>
            <Footer.Link href="#">
              <FaTwitter />
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#top" by="Mars Web Development" year={2024} />
      </div>
    </Footer>
  );
}
