import { style } from "@vanilla-extract/css";

export const page = style({ margin: "2rem" });

export const header = style({
  paddingBottom: "1rem",
  marginBottom: "1rem",
  borderBottom: "solid 1px silver",
});

export const main = style({});

export const footer = style({});

export const bondTable = style({
  borderSpacing: "1rem 0.5rem",
  selectors: {
    "&": {
      textAlign: "left",
    },
  },
});

export const bondTableHeaderRow = style({
  borderBottom: "solid 1px gray",
});

export const bondTableHeaderCell = style({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "2rem",
});

export const bondTableRow = style({
  borderBottom: "solid 1px gray",
});

export const bondTableCell = style({
  fontFamily: "Source Code Pro",
  fontWeight: 600,
  padding: "0.25rem",
  paddingRight: "2rem",
});
