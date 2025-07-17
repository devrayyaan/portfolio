import React from "react";

interface SEOHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SEOHeading({ as: Component = "h2", children, className, style }: SEOHeadingProps) {
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}

export function PageTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`${className} seo-page-title`} itemProp="name">
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`${className} seo-section-title`} itemProp="headline">
      {children}
    </h2>
  );
}