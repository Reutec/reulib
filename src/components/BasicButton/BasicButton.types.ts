import { ButtonHTMLAttributes } from "react";
export interface BasicButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  showPictoAdd?: boolean;
  backgroundColor?: string;
  isDarkText?: boolean;
}
