"use client";

import { plus, xIcon } from "@/static";
import type { FAQItemType } from "@/types";
import { slideDown, slideUp } from "@/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type FAQItemProps = {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onClick: (index: number) => void;
};

export default function FAQItem({
  item,
  index,
  isOpen,
  onClick,
}: FAQItemProps) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      slideDown(contentRef.current);
    } else {
      slideUp(contentRef.current);
    }
  }, [isOpen]);
  return (
    <div className={`faq-answer-item ${isOpen ? "active" : ""}`}>
      <div className={`faq-answer-header`} onClick={() => onClick(index)}>
        <p className="faq-question line-clamp-2">{item.question}</p>
        <button type="button" className="faq-icon">
          <Image
            loading="lazy"
            width={19}
            height={28}
            sizes="100vw"
            src={isOpen ? xIcon : plus}
            alt="plus"
          />
        </button>
      </div>
      <div ref={contentRef} className="faq-answer-content">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
