import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/logo";

const config: DocsThemeConfig = {
  logo: (<div style={{display:"flex",alignItems:"center",gap:"10px"}}>
  <img
  src="/logo.jpg"
  alt="logo"
  style={{height:32}}/>
  <span style={{ fontWeight:"bold",fontSize:"18px"}}>
    بینات
  </span>
  </div>
  ),
  project: {
    link: "https://github.com/Amirmsdi",
  },
  docsRepositoryBase: "https://github.com/Amirmsdi/BINAT_HELP.git",
  footer: {
    component: <></>,
  },
  direction: "rtl",
  editLink: {
    text: "ویرایش صفحه",
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  feedback: {
    content: "سوال دارید؟ به ما بازخورد بدهید.",
  },
  search: {
    placeholder: "جستجو کنید...",
  },
  toc: {
    title: "فهرست",
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: "light",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | بینات",
    };
  },
  themeSwitch: {
    useOptions: {
      dark: "تاریک",
      light: "روشن",
      system: "سیستم",
    },
  },
};

export default config;
