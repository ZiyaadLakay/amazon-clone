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
        <div className="flex justify-center pb-2 pt-20">
          <Image
            src="/amazon.svg"
            width="300"
            height="300"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col mt-auto button">
          <button onClick={signIn}>Login With your Google Account</button>
        </div>
      </div>
    </div>
  );
}

export default login;
