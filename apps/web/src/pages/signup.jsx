import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import { ButtonAlt, Input, LogoGradient } from "ui";
import { updateUserName } from "../components/lib/supabase/supabase-client";

const SignUp = () => {
  const supabaseClient = useSupabaseClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  const user = useUser();
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});
    const {
      error,
      data: { user: createdUser },
    } = await supabaseClient.auth.signUp({
      email,
      password,
    });
    if (error) {
      setMessage({ type: "error", content: error.message });
    } else {
      if (createdUser) {
        await updateUserName(createdUser, name);
        setNewUser(createdUser);
      } else {
        setMessage({
          type: "note",
          content: "Verifique seu e-mail para o link de confirmação.",
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (newUser || user) {
      router.replace("/account");
    }
  }, [newUser, user]);

  return (
    <div className="height-screen-helper flex justify-center">
      <div className="m-auto flex w-80 max-w-lg flex-col justify-between p-3 ">
        <div className="flex justify-center pb-12 ">
          <LogoGradient />
        </div>

        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          {message.content && (
            <div
              className={`${
                message.type === "error" ? "text-pink-500" : "text-green-500"
              } border ${
                message.type === "error"
                  ? "border-pink-500"
                  : "border-green-500"
              } p-3`}
            >
              {message.content}
            </div>
          )}

          <Input placeholder="Nome" onChange={setName} />

          <Input
            type="email"
            placeholder="E-mail"
            onChange={setEmail}
            required
          />

          <Input type="password" placeholder="Senha" onChange={setPassword} />

          <div className="flex w-full flex-col pt-2">
            <ButtonAlt
              variant="slim"
              type="submit"
              loading={loading}
              disabled={loading || !email.length || !password.length}
            >
              Cadastrar
            </ButtonAlt>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-slate-800">Você tem uma conta?</span>
            {` `}
            <Link href="/signin">
              <a className="text-accent-9 cursor-pointer font-bold hover:underline">
                Login.
              </a>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
