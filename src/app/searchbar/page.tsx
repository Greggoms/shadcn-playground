import { Metadata } from "next";

import Searchbar from "@/components/forms/Searchbar";

export const metadata: Metadata = {
  title: "Searchbar | shadcn-playground",
  description: "Combobox style search powered by cmdk.",
};

const FormPage = () => {
  return (
    <main className="container mt-5 mb-10">
      <Searchbar />

      <div className="space-y-4 leading-7">
        <p>
          You can search through any object value that is returned from a{" "}
          <a href="https://jsonplaceholder.typicode.com/users" className="link">
            JSON Placeholder users
          </a>{" "}
          fetch request. This is achieved by using a simple{" "}
          <a
            href="https://github.com/Greggoms/shadcn-playground/blob/main/src/lib/utils/flatten-object.ts"
            className="link"
          >
            <code>flatten-object</code>
          </a>{" "}
          utility I found a while ago. The performance probably isn&apos;t the
          best for large data sets, but it works for this.
        </p>
        <p>
          The data is being fetched using{" "}
          <a
            href="https://tanstack.com/query/latest/docs/framework/react/overview"
            className="link"
          >
            Tanstack&apos;s React Query
          </a>
          , my first time using it with{" "}
          <a
            href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
            className="link"
          >
            NextJS
          </a>
          .
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum
          quasi aspernatur possimus excepturi provident repellendus illum
          temporibus ipsa. Consequatur veniam ut asperiores cumque error magni
          tenetur temporibus nesciunt autem. Eaque, repellendus tenetur ullam
          accusamus rem pariatur aliquam voluptates dignissimos ut, ab soluta
          odio? Maxime hic reiciendis aut. Voluptates nulla veritatis totam eius
          quia quidem aperiam ut accusantium provident harum. Beatae deserunt
          quisquam obcaecati, est optio quaerat ex dolor at delectus ipsum qui
          laudantium. Vel laborum nihil ipsum enim repellat possimus veniam
          natus consequatur, blanditiis ea iste necessitatibus labore quod!
          Aliquid laborum molestiae natus hic ea amet? Doloremque porro expedita
          consectetur sint nam blanditiis, inventore odio similique quidem atque
          mollitia harum molestias sit! Deserunt, labore ipsum. Quas delectus
          consequatur officia. Natus laudantium officia tenetur eius explicabo
          tempore molestias quaerat quos eveniet, blanditiis magni, ullam
          suscipit consectetur nulla dolorem ipsum architecto sint ratione nobis
          delectus nihil. Quibusdam repudiandae reiciendis labore perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum
          quasi aspernatur possimus excepturi provident repellendus illum
          temporibus ipsa. Consequatur veniam ut asperiores cumque error magni
          tenetur temporibus nesciunt autem. Eaque, repellendus tenetur ullam
          accusamus rem pariatur aliquam voluptates dignissimos ut, ab soluta
          odio? Maxime hic reiciendis aut. Voluptates nulla veritatis totam eius
          quia quidem aperiam ut accusantium provident harum. Beatae deserunt
          quisquam obcaecati, est optio quaerat ex dolor at delectus ipsum qui
          laudantium. Vel laborum nihil ipsum enim repellat possimus veniam
          natus consequatur, blanditiis ea iste necessitatibus labore quod!
          Aliquid laborum molestiae natus hic ea amet? Doloremque porro expedita
          consectetur sint nam blanditiis, inventore odio similique quidem atque
          mollitia harum molestias sit! Deserunt, labore ipsum. Quas delectus
          consequatur officia. Natus laudantium officia tenetur eius explicabo
          tempore molestias quaerat quos eveniet, blanditiis magni, ullam
          suscipit consectetur nulla dolorem ipsum architecto sint ratione nobis
          delectus nihil. Quibusdam repudiandae reiciendis labore perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum
          quasi aspernatur possimus excepturi provident repellendus illum
          temporibus ipsa. Consequatur veniam ut asperiores cumque error magni
          tenetur temporibus nesciunt autem. Eaque, repellendus tenetur ullam
          accusamus rem pariatur aliquam voluptates dignissimos ut, ab soluta
          odio? Maxime hic reiciendis aut. Voluptates nulla veritatis totam eius
          quia quidem aperiam ut accusantium provident harum. Beatae deserunt
          quisquam obcaecati, est optio quaerat ex dolor at delectus ipsum qui
          laudantium. Vel laborum nihil ipsum enim repellat possimus veniam
          natus consequatur, blanditiis ea iste necessitatibus labore quod!
          Aliquid laborum molestiae natus hic ea amet? Doloremque porro expedita
          consectetur sint nam blanditiis, inventore odio similique quidem atque
          mollitia harum molestias sit! Deserunt, labore ipsum. Quas delectus
          consequatur officia. Natus laudantium officia tenetur eius explicabo
          tempore molestias quaerat quos eveniet, blanditiis magni, ullam
          suscipit consectetur nulla dolorem ipsum architecto sint ratione nobis
          delectus nihil. Quibusdam repudiandae reiciendis labore perferendis.
        </p>
      </div>
    </main>
  );
};

export default FormPage;
