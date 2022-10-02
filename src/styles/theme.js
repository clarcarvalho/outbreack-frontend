import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { fonts } from "./fonts";
import { globalStyles } from "./globalStyles";

export const theme = extendTheme({ breakpoints }, { fonts }, globalStyles);
