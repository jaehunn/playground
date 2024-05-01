import { screen } from "@testing-library/react";
import { render } from "@/utils/test";
import RegisterPage from "./page";

describe("Register", () => {
  test("이름과 패스워드를 입력하고, Submit 버튼을 누르면, 이름이 출력된다.", async () => {
    const { user } = render(<RegisterPage />);

    await user.type(await screen.findByPlaceholderText("NAME"), "jack");
    await user.click(await screen.findByRole("button", { name: "Submit" }));

    expect(screen.queryByText("jack")).not.toBeInTheDocument();

    await user.type(await screen.findByPlaceholderText("PASSWORD"), "123");
    await user.click(await screen.findByRole("button", { name: "Submit" }));

    expect(screen.queryByText("jack")).toBeInTheDocument();
  });
});
