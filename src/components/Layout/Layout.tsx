import { ReactNode } from "react";
import { ReactComponent as Icon } from "@assets/icon.svg";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <p>
          <Icon className="w-[20px] h-[20px] inline mr-4" />
          React + Vite + TypeScript starter
        </p>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="about">About</Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export { Layout };
