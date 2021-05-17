import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={200}
        width={300}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-4 bg-blue-600 rounded-full 
      text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
