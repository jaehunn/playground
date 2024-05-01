"use client";

import { ComponentProps, useState } from "react";
import RegisterUI from "./RegisterUI";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const props: ComponentProps<typeof RegisterUI> = {
    name,
    password,
    onChangeName: ({ target: { value } }) => {
      setName(value);
    },
    onChangePassword: ({ target: { value } }) => {
      setPassword(value);
    },
    onSubmit: (e) => {
      e.preventDefault();

      console.log({
        name,
        password,
      });
    },
  };

  return <RegisterUI {...props} />;
}
