import styled from "styled-components";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import axios from "axios";

const currentValue = {
  name: "",
  num: "",
  email: "",
  contents: "",
};

export default function Contents() {
  const nameRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState({ ...currentValue });
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const changeValue = (
    key: keyof typeof value,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue((prev) => ({ ...prev, [key]: e?.target?.value ?? "" }));
  };

  const fail = (message: any): void => {
    console.log(message);
    alert("서버와 통신이 불안정합니다. 다시 시도해주세요.");
  };

  const success = (): void => {
    alert("제출되었습니다.");
    window.location.reload();
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isLoad) return;
    setIsLoad(true);

    const form = new FormData();
    Object.keys(value).forEach((key) => {
      form.append(key, value[key as keyof typeof value]);
    });

    axios
      .post("//pcmania1.gabia.io/api/mail", form)
      .then(({ data }) => {
        if (!data?.result) return fail(data);
        success();
      })
      .catch((err) => {
        fail(err);
      })
      .finally(() => setIsLoad(false));
  };

  return (
    <Container onSubmit={submit}>
      <Row>
        <RowTitle>이름</RowTitle>
        <Input
          type="text"
          required
          ref={nameRef}
          onChange={(e) => changeValue("name", e)}
          placeholder="이름을 입력해주세요."
        />
      </Row>
      <Row>
        <RowTitle>연락처</RowTitle>
        <Input
          type="tel"
          required
          ref={numRef}
          onChange={(e) => changeValue("num", e)}
          placeholder="연락처를 입력해주세요. (010-1234-1234)"
        />
      </Row>
      <Row>
        <RowTitle>이메일</RowTitle>
        <Input
          type="email"
          required
          ref={emailRef}
          onChange={(e) => changeValue("email", e)}
          placeholder="이메일을 입력해주세요. (example@liansoft.co.kr)"
        />
      </Row>
      <Row>
        <RowTitle style={{ height: 400 }}>내용</RowTitle>
        <TextArea
          ref={contentsRef}
          required
          onChange={(e) => changeValue("contents", e)}
          placeholder="내용을 입력해주세요."
        />
      </Row>
      <Row className="bottom">
        <Button type="submit">{isLoad ? "전송중.." : "제 출"}</Button>
      </Row>
    </Container>
  );
}

const Container = styled.form`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto 50px;
`;
const Row = styled.div`
  border: 1px solid #ced4da;
  border-top: none;
  display: flex;
  justify-content: flex-end;

  &:first-of-type {
    border: 1px solid #ced4da;
  }

  &.bottom {
    margin-top: 20px;
    border: none;
  }
`;
const RowTitle = styled.p`
  background-color: #e9ecef;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 15px;
  letter-spacing: 5px;
  text-indent: 5px;
  color: #555555;
  font-weight: 700;
`;
const inputStyle = `
  flex: 1;
  border: none;
  padding: 0 10px;
  letter-spacing: 1px;
`;
const Input = styled.input`
  ${inputStyle}
`;
const TextArea = styled.textarea`
  ${inputStyle}
  resize: none;
  padding: 10px;
  line-height: 24px;
`;
const Button = styled.button`
  padding: 0 20px;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #364976;

  &:hover {
    background-color: #1b2e5a;
  }
`;
