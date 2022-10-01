import Center from "../components/Center";
import Card from "../components/Card";
import FormControl from "../components/FormControl";
import Input from "../components/Input";
import LabelForm from "../components/LabelForm";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  function cpValidate(val) {
    if (watch("password") !== val) return "Password doesn't match";
  }

  function handleForm({ email, password }) {}

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <Center>
      <Card>
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-700">SignUp</h1>
        </header>
        <div>
          <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
            <FormControl errMsg={errors?.email?.message}>
              <LabelForm text="email" />
              <Input
                register={register}
                required="email required"
                type="email"
                placeholder="Email"
                name="email"
              />
            </FormControl>
            <FormControl errMsg={errors?.password?.message}>
              <LabelForm text="password" />
              <Input
                register={register}
                required="password required"
                type="password"
                placeholder="Password"
                name="password"
              />
            </FormControl>
            <FormControl errMsg={errors?.confirm?.message}>
              <LabelForm text="confirm" />
              <Input
                register={register}
                required="confirm required"
                validate={cpValidate}
                type="password"
                placeholder="Confirm"
                name="confirm"
              />
            </FormControl>
            <div className="text-center">
              <Button type="submit">signUp</Button>
            </div>
          </form>
        </div>
      </Card>
    </Center>
  );
}
