import { FormEventHandler } from "react";

type Props = {
  name: string;
  password: string;
  onChangeName: () => void;
  onChangePassword: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function RegisterUI({
  name,
  password,
  onChangeName,
  onChangePassword,
  onSubmit,
}: Props) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            placeholder="NAME"
            name="name"
            value={name}
            onChange={onChangeName}
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="PASSWORD"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
