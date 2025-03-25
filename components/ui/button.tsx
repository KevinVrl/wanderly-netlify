"use client"; // ✅ Force le rendu côté client

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  if (asChild) {
    return <span {...props} className={className} />;
  }
  return <button {...props} className={className} />;
}
