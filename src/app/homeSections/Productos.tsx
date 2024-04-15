import { fetchGraphql, graphql } from "@/lib/graphql";

export default async function Productos() {
  const query = graphql(`
    query Productos {
      products(first: 20) {
        nodes {
          title
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  console.log(data.products);

  return (
    <div className="container mx-auto p-5 grid grid-cols-4">
      <p>dfuhgdgdfj</p>
    </div>
  );
}

export function ProductoCard() {
  return <div>Este es un producto</div>;
}
