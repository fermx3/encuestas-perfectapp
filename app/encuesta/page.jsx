import { redirect } from "next/navigation";

const EncuestaPage = () => {
  redirect("/encuestas/1");
}

export default EncuestaPage;
// Redirect to a default survey (survey with ID 1)
