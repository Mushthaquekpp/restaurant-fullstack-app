import React, { useEffect, useState } from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Helmet from "react-helmet";
import "./layout.css";

const Layout = ({ children, title = "Page Title" }) => {
  const [isSticky, setIsSticky] = useState(false); // State to track if navbar is sticky
  const [unmounting, setUnmounting] = useState(false); // State to handle unmounting
  const [expanded, setExpanded] = useState(false); // State to track if navbar is expanded (open) on mobile

  // Effect to handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(!unmounting && window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [unmounting]);

  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header
        setExpanded={setExpanded}
        isSticky={isSticky}
        expanded={expanded}
      />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
