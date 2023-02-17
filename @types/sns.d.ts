declare type SnsPlatform =
  | "kakao"
  | "facebook"
  | "blog"
  | "cafe"
  | "instagram"
  | "youtube";

declare type Sns = { name: SnsPlatform; url: string; img: string };
