import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-sm bg-[#52422e]   text-[#fcfbfb]">
      <p>
        <a href="tel:+37498765432">Տաթև | 098 76 54 32</a>
      </p>
      <p>
        <a href="tel:+37498765432">Գոռ | 098 76 54 32</a>
      </p>
      <hr className="my-5" />
      <Link href="https://www.instagram.com/webinvite.am/">
        <p className="mt-2">
          Պատրաստվել է WebInvite - կողմից կողմից
        </p>
      </Link>
    </footer>
  );
}
