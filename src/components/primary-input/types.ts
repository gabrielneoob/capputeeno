import React from "react";

export interface PrimaryInput {
  placeholder?: string;
  css?: React.CSSProperties;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
