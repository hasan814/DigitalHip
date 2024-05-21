import { LuArrowDownToLine } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";

export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kites",
    value: "ui_kits" as const,
    featured: [
      { name: "Editor picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Bestsellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "favorite Icon Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/icons/new.jpg" },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];

export const PERKS = [
  {
    name: "Instant Delivery",
    Icon: <LuArrowDownToLine />,
    description:
      "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    Icon: <FaRegCheckCircle />,
    description:
      "Your Platform is verified by our team to ensure our highest quality standards. Not Happy? We offer a 30-day refactor and Garanteed period",
  },
  {
    name: "For the Planet",
    Icon: <FaLeaf />,
    description:
      "We've pledged 1% of sales to the preservation and resorationof the natural environment",
  },
];
