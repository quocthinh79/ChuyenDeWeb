import "@emotion/react";
import { ITheme } from "./core/types/interface/ITheme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
