import { validateEmail } from "./validation";

describe("validateEmail", () => {
  test("email が空の場合エラーになること", () => {
    expect(validateEmail("")).toBe(false);
  });
  test("email が null の場合エラーになること", () => {
    expect(validateEmail(null)).toBe(false);
  });
  test("email が undefined の場合エラーになること", () => {
    expect(validateEmail(undefined)).toBe(false);
  });
  test("email が string ではない場合エラーになること", () => {
    expect(validateEmail(32)).toBe(false);
  });
  test("email が短すぎる場合エラーになること", () => {
    expect(validateEmail("a@")).toBe(false);
  });
  test("email の形式が合っていない場合エラーになること", () => {
    expect(validateEmail("aiueo.com")).toBe(false);
  });
  test("正しい email の場合エラーにならないこと", () => {
    expect(validateEmail("hoge@example.com")).toBe(true);
  });

  test.each`
    email           | expected
    ${null}         | ${false}
    ${undefined}    | ${false}
    ${""}           | ${false}
    ${"google.com"} | ${false}
    ${"g@"}         | ${false}
  `("無効なメールアドレスの場合エラーになること", ({ email, expected }) => {
    expect(validateEmail(email)).toBe(expected);
  });

  test.each`
    email                   | expected
    ${"google@example.com"} | ${true}
  `("有効なメールアドレスの場合エラーにならないこと", ({ email, expected }) => {
    expect(validateEmail(email)).toBe(expected);
  });
});
