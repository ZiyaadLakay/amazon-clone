import Head from "next/head";
import Image from "next/image";
import { auth, provider } from "../../firebase";
import { useRouter } from "next/router";
function login() {
  const router = useRouter();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(() => {
        router.push("/");
      })
      .catch(alert);
  };

  return (
    <div className="grid justify-items-center">
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <Image
          src="/amazon.svg"
          width="70"
          height="50"
          objectFit="contain"
          className="cursor-pointer"
        />
        <button onClick={signIn} className="flex flex-col mt-auto button">
          Login With your Google Account
        </button>
      </div>
    </div>
  );
}

export default login;
