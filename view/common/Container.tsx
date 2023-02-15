type Props = {
  children?: any;
  style?: any;
  type?: "home";
};

export default function Container({ children, type }: Props) {
  return (
    <main style={{ marginTop: type === "home" ? 0 : 90 }}>
      {children ?? "컴포넌트가 없습니다."}
    </main>
  );
}
