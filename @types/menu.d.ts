declare type Menu = {
  name: string;
  path: string;
};
declare type MenuList = Menu & {
  sub: Menu[];
};
