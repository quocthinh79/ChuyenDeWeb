import "@emotion/react";
import { ITheme } from "./core/types/ITheme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
