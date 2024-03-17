import { ButtonHTMLAttributes } from "react";
export interface LightButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName?: string;
}
