import React from "react";

export interface EmptyPropTypes {}

export interface PropTypesWithChildren extends EmptyPropTypes {
  children?: React.ReactNode;
}
