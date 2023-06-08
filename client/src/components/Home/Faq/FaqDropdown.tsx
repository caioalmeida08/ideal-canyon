import { FunctionComponent } from "react";

import style from "./FaqDynamic.module.scss"

interface FaqDropdownProps {
    heading: string,
    text: string
}

const FaqDropdown: FunctionComponent<FaqDropdownProps> = ({heading, text}) => {
  return (
    <li className={`text-demi faq-dynamic ${style.faq_dynamic}`} tabIndex={0} data-active="false">
      <h3>{heading}</h3>
      <p className="text-p line-height-125 text-justify">
        {text}
      </p>
    </li>
  );
};

export default FaqDropdown;
