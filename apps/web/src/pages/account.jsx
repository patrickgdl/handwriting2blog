import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ButtonAlt, Input, LoadingDots } from "ui";

import Layout from "../components/layout";
import { updateUserName } from "../components/lib/supabase/supabase-client";
import { postData } from "../components/lib/utils/helpers";
import { useUser } from "../components/lib/utils/useUser";

function Card({ title, description, footer, children }) {
  return (
    <div className="p m-auto my-8 w-full max-w-3xl rounded-md border border-zinc-400">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-xl">{title}</h3>
        <p className="text-zinc-700">{description}</p>
        {children}
      </div>

      <div className="rounded-b-md border-t border-zinc-400  p-4 text-zinc-700">
        {footer}
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Account({ user }) {
  const [loading, setLoading] = useState(false);
  const [loadingChange, setLoadingChange] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();

  const [name, setName] = useState(userDetails?.full_name ?? "");

  useEffect(() => {
    if (userDetails) {
      setName(userDetails.full_name);
    }
  }, [userDetails]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);

    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert(error.message);
    }

    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  const handleChangeName = async (e) => {
    e.preventDefault();

    setLoadingChange(true);

    await updateUserName(userDetails, name);

    alert("Nome atualizado com sucesso!");

    setLoadingChange(false);
  };

  return (
    <Layout>
      <section className="mb-32 font-display">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-8 sm:px-6 sm:pt-24 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-4xl font-extrabold text-slate-800 sm:text-center">
              Conta
            </h1>
            <p className="m-auto mt-5 max-w-2xl text-xl text-zinc-700 sm:text-center">
              Fizemos uma parceria com o Stripe para um faturamento
              simplificado.
            </p>
          </div>
        </div>

        <div className="p-4">
          <Card
            title="Seu plano"
            description={
              subscription
                ? `Você está atualmente no plano ${subscription?.prices?.products?.name}.`
                : ""
            }
            footer={
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <p className="pb-4 sm:pb-0">
                  Gerencie sua assinatura no Stripe.
                </p>
                <ButtonAlt
                  variant="slim"
                  loading={loading}
                  disabled={loading || !subscription}
                  onClick={redirectToCustomerPortal}
                >
                  Abra o portal do cliente
                </ButtonAlt>
              </div>
            }
          >
            <div className="mt-8 mb-4 text-lg font-semibold hover:underline">
              {isLoading ? (
                <div className="mb-6 h-12">
                  <LoadingDots />
                </div>
              ) : subscription ? (
                `${subscriptionPrice}/${
                  subscription?.prices?.interval === "month" ? "mês" : "ano"
                }`
              ) : (
                <Link href="/pricing">
                  <a>Clique e escolha seu plano</a>
                </Link>
              )}
            </div>
          </Card>

          <Card
            title="Seu nome"
            description="Insira seu nome completo ou um nome de exibição com o qual você se sinta confortável."
            footer={<p>Por favor, use 64 caracteres no máximo.</p>}
          >
            <div className="mt-8 mb-4 text-xl font-semibold">
              {userDetails ? (
                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <Input placeholder="Nome" onChange={setName} value={name} />

                  <ButtonAlt
                    variant="slim"
                    loading={loadingChange}
                    disabled={!name}
                    onClick={handleChangeName}
                  >
                    Alterar
                  </ButtonAlt>
                </div>
              ) : (
                <div className="mb-6 h-8">
                  <LoadingDots />
                </div>
              )}
            </div>
          </Card>

          <Card
            title="Seu e-mail"
            description="Por favor, digite o endereço de e-mail que você deseja usar para fazer login."
            footer={
              <p>Enviaremos um e-mail para você para verificar a alteração.</p>
            }
          >
            <p className="mt-8 mb-4 text-xl font-semibold">
              {user ? user.email : undefined}
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
