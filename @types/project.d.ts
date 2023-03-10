declare type Project = {
  id: number;
  name: string;
  img: string;
  desc: string;
  url?: string;
  device: "pc" | "mobile";
  platform?: { name: "Android" | "IOS"; url: string }[];
};
