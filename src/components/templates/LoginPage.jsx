import { handlerGithubLogin } from "@/utils/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handlerGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
