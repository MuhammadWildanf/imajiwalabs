import { Metadata } from "next";
import FrontendLayoutClient from "./FrontendLayoutClient";

export const metadata: Metadata = {
  title: "Vortrex",
  description: "Vortrex",
  icons: {
    icon: "/assets/frontend/img/logo/titile.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <FrontendLayoutClient>{children}</FrontendLayoutClient>;
}
