"use client";

import { plus, xIcon } from "@/static";
import type { FAQItemType } from "@/types";
import { slideDown, slideUp } from "@/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type FAQItemTransparentProps = {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onClick: (index: number) => void;
};

export default function FAQItemTransparent({
  item,
  index,
  isOpen,
  onClick,
}: FAQItemTransparentProps) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      slideDown(contentRef.current);
    } else {
      slideUp(contentRef.current);
    }
  }, [isOpen]);
  return (
    <div className={`faq-answer-item__transparent ${isOpen ? "active" : ""}`}>
      <div
        className={`faq-answer-header__transparent`}
        onClick={() => onClick(index)}
      >
        <p className="faq-question__transparent">{item.question}</p>
        <button type="button" className="faq-icon__transparent">
          <Image
            width={19}
            height={28}
            sizes="100vw"
            loading="lazy"
            src={isOpen ? xIcon : plus}
            alt="plus"
          />
        </button>
      </div>
      <div ref={contentRef} className="faq-answer-content__transparent">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
