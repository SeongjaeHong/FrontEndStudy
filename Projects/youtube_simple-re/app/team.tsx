// provides type safety/inference
import type { Route } from "./+types/team";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  return { name: "my team name" + params.teamId };
}

// renders after the loader is done
export default function Component({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.name}</h1>;
}
