import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { defaultTheme } from "./defaultTheme";

const getColor = (theme, color, fallback) => {
  const chakraColor = color.split(".");

  if (Object.prototype.hasOwnProperty.call(theme.colors, chakraColor[0])) {
    if (Object.prototype.hasOwnProperty.call(theme.colors[chakraColor[0]], chakraColor[1])) {
      return theme.colors[chakraColor[0]][chakraColor[1]];
    }
  }

  return theme.colors[fallback]["300"];
};

export const inputTheme = defineStyleConfig({
  defaultProps: {
    size: "sm",
    variant: "outline",
  },
});

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
});
const headerHeightVal = 3; // chakra size val: 12
const footerHeightVal = 3.5; // chakra size val: 14
const panelHeaderHeightVal = 1.5; // chakra size val: 6

// 1px extra deduction for border weight
const contentHeight = `calc(100vh - ${headerHeightVal + footerHeightVal}rem - 1px)`;
const headerHeight = `${headerHeightVal}rem`;
const footerHeight = `${footerHeightVal}rem - 0px`;
const panelHeaderHeight = `${panelHeaderHeightVal}rem`;
const panelContentHeight = `calc(100% - ${headerHeightVal + panelHeaderHeightVal}rem)`

export const codeTheme = defineStyle({
  fontSize: "0.9rem",
  fontWeight: 500,
});

export const theme = extendTheme(defaultTheme, {
  sizes: {
    contentHeight,
    headerHeight,
    footerHeight,
    panelHeaderHeight,
    panelContentHeight,
  },
  borders: {
    "1px": `1px solid ${getColor(defaultTheme, "gray.300", "gray")}`,
  },
  fonts: {
    body: `'JetBrains Mono Variable', monospace`,
    mono: `'JetBrains Mono Variable', monospace`,
  },
  components: {
    Text: {
      baseStyle: props => {
        return {
          color: props.color || "gray.600",
          fontSize: props.fontSize || "0.9rem",
        };
      },
    },
    Icon: {
      baseStyle: props => {
        return {
          color: props.color || "gray.600",
          boxSize: props.boxSize || "1.2rem",
          cursor: props.cursor || "pointer",
        };
      },
    },
    Input: {
      ...inputTheme,
      variants: {
        outline: {
          field: {
            bg: "#ECECEC !important",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "gray.300",
            _hover: {
              borderColor: "gray.87",
            },
            _focusVisible: {
              outline: "none",
              borderColor: "gray.87",
              boxShadow: "0 0 0 0px transparent !important",
            },
          },
        },
      },
    },
    Code: {
      variants: { subtle: codeTheme },
    },
    PanelContainer: {
      baseStyle: {
        bg: "gray.100",
        w: "100%",
        minHeight: contentHeight,
        maxHeight: contentHeight,
        overflow: "scroll",
      },
    },
    PanelHeaderContainer: {
      baseStyle: {
        w: "100%",
        minHeight: 6,
        maxHeight: 6,
        borderBottom: "1px solid",
        borderColor: "gray.300",
      },
    },
    Tabs: {
      variants: {
        line: {
          tab: {
            border: "none",
            borderBottom: "none",
            color: "none",
            borderColor: "none",
            bg: "gray.300",
            _selected: {
              border: "none",
              borderColor: "none",
              color: "none",
              bg: "none",
              borderBottom: "none",
            },
          },
          tablist: {
            borderBottom: "0px solid",
          },
        },
      },
    },
    Table: {
      variants: {
        simple: {
          td: {
            fontSize: "0.8rem",
            borderColor: "gray.87",
          },
          thead: {
            borderBottom: "1px solid var(--chakra-colors-gray-87)",
          },
        },
      },
    },
    Button: {
      ...buttonTheme,
      variants: {
        solid: props => {
          return {
            fontSize: props.fontSize || "0.9rem",
            fontWeight: props.fontWeight || 400,
          };
        },
      },
    },
  },
});
