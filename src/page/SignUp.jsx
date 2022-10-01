import Center from "../components/Center";
import Card from "../components/Card";
import FormControl from "../components/FormControl";
import Input from "../components/Input";
import LabelForm from "../components/LabelForm";
import Button from "../components/Button";

export default function SignUp() {
  return (
    <Center>
      <Card>
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-700">SignUp</h1>
        </header>
        <div>
          <form className="space-y-4">
            <FormControl>
              <LabelForm text="email" />
              <Input type="email" placeholder="Email" name="email" />
            </FormControl>
            <FormControl>
              <LabelForm text="password" />
              <Input type="password" placeholder="Password" name="password" />
            </FormControl>
            <FormControl>
              <LabelForm text="confirm" />
              <Input type="password" placeholder="Confirm" name="confirm" />
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
