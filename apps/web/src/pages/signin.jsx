import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import { ButtonAlt, LoadingDots, Input, LogoGradient, GitHub } from "ui";
import { getURL } from "../components/lib/utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const handleSignin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    let error;
    if (!password) {
      const res = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: getURL() },
      });
      error = res.error;
    } else {
      const res = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      error = res.error;
    }
    if (error) {
      setMessage({ type: "error", content: error.message });
    }
    if (!password) {
      setMessage({
        type: "note",
        content: "Verifique seu e-mail para o link mágico.",
      });
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: { redirectTo: getURL() },
    });
    if (error) {
      setMessage({ type: "error", content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace("/account");
    }
  }, [user]);

  if (!user)
    return (
      <div className="height-screen-helper flex justify-center">
        <div className="m-auto flex w-80 max-w-lg flex-col justify-between p-3 ">
          <div className="flex justify-center pb-12">
            <LogoGradient />
          </div>
          <div className="flex flex-col space-y-4">
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

            {!showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <ButtonAlt
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!email.length}
                >
                  Mandar link mágico
                </ButtonAlt>
              </form>
            )}

            {showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <ButtonAlt
                  className="mt-1"
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Login
                </ButtonAlt>
              </form>
            )}

            <span className="pt-1 text-center text-sm">
              <a
                href="#"
                className="text-accent-9 cursor-pointer text-slate-800 hover:underline"
                onClick={() => {
                  if (showPasswordInput) setPassword("");
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                {`Ou logue com ${showPasswordInput ? "link mágico" : "senha"}.`}
              </a>
            </span>

            <span className="pt-1 text-center text-sm">
              <span className="text-slate-800">Não tem uma conta?</span>
              {` `}
              <Link href="/signup">
                <a className="text-accent-9 cursor-pointer font-bold hover:underline">
                  Cadastra-se.
                </a>
              </Link>
            </span>
          </div>

          <div className="my-6 flex items-center">
            <div
              className="mr-3 flex-grow border-t border-zinc-400"
              aria-hidden="true"
            ></div>
            <div className="text-zinc-400">ou</div>
            <div
              className="ml-3 flex-grow border-t border-zinc-400"
              aria-hidden="true"
            ></div>
          </div>

          <ButtonAlt
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn("github")}
          >
            <GitHub />
            <span className="ml-2">Continue com GitHub</span>
          </ButtonAlt>
        </div>
      </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
