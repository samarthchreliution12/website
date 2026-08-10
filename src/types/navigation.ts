export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavServiceDropdownGroup {
  category: string;
  items: {
    title: string;
    desc: string;
    href: string;
    badge?: string;
  }[];
}
