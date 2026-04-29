import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#161513]/10 bg-[#f7f4ee] px-6 py-8 text-[#4c4943] sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-[#161513]">
          Alvin Christopher Santausa
        </p>
        <p>Copyright © {new Date().getFullYear()}. Designed and built by Alvin.</p>
      </div>
    </footer>
  );
};

export default Footer;
