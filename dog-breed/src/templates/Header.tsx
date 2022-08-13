import React from "react";

interface HeaderProps {
    title: string
}

function Header(props: HeaderProps) {
  return (
    <div >

          <span>Dog Breed - {props.title}</span>

    </div>
  );
}

export default Header;