export default function Videos() {
  return <p>Videos</p>;
}

export async function action({ request }) {
  console.log("Show something");
  const data = await request.formData();
  console.log("Show something");
  console.log(data);
}
