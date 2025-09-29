"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import "./styles.css";

export const Post = ({ recordMap }: { recordMap: any }) => {
  return (
    <div className="mx-auto">
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
    </div>
  );
};
