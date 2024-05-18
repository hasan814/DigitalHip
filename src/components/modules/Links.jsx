import { v4 as uuidv4 } from "uuid";
import { PageLinks } from "@/utils/helper";

import Link from "next/link";

const Links = () => {
  return (
    <>
      {PageLinks.map((link) => (
        <Link key={uuidv4()} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
