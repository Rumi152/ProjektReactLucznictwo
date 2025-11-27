import type { Route } from "./+types/home";

export function loader({ params }) {
  return { params: params };
}

export default function Shop({ loaderData }: Route.ComponentProps) {
  return (
    <>
      {`${loaderData.params.category}/${loaderData.params.subcategory}`}
    </>
  );
}
