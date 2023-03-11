import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu } from "@headlessui/react";
import { Logo } from "../Logo";
import {
  House,
  Scales,
  Info,
  Money,
  Question,
  Lightbulb,
  IdentificationBadge,
  List,
} from "phosphor-react";


export const MainNavbar = () => {
  return (
    <nav className={styles.main_nav}>
      <div className="flex-1">
       <Logo width="48" height="48" />
      </div>
      <div className="flex-1">
        <div className={styles.links}>
          {routes.map((route, id) => {
            const { url, icon, name } = route;
            return (
              <Link className="text-center" key={id} href={url}>
                {icon} {name}
              </Link>
            );
          })}
        </div>
        <Menu as="div" className={styles.mobile_menu_wrapper}>
          <Menu.Button className={styles.mobile_menu_button}>
            <List size={"2rem"} color="#fff" weight="bold" />
          </Menu.Button>
          <Menu.Items className={styles.mobile_menu_items}>
            {routes.map((route, id) => {
              const { name, url } = route;
              return (
                <Menu.Item key={id}>
                  <a href={url} className={styles.mobile_menu_item}>
                    {name}
                  </a>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export const routes = [
  {
    icon: (
      <House
        size={"1.5em"}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Domů",
    url: "/",
  },
  {
    icon: (
      <Scales
        size={"1.5em"}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Pravidla",
    url: "/pravidla",
  },
  {
    icon: (
      <Info
        size={"1.5em"}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "O nás",
    url: "/o-nas",
  },
  {
    icon: (
      <Question
        size={"1.5em"}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "FAQ",
    url: "/faq",
  },
  {
    icon: (
      <Money
        size={"1.5em"}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Donate",
    url: "/donate",
  },
  {
    icon: (
      <Lightbulb
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Wiki",
    url: "https://wiki.mcjabko.cz",
  },
  {
    icon: (
      <IdentificationBadge
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Banlist",
    url: "https://banlist.mcjabko.cz",
  },
];
