import { prisma } from "@/lib/db/prisma";

export const metadata = {
  title: "Add Product - Ecommerce",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price" || 0));

  await prisma.product.create({
    data: {},
  });
}

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product Page</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-2 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-2 w-full"
        ></textarea>
        <input
          required
          name="imageUrl"
          placeholder="Image Url"
          type="url"
          className="input-bordered input mb-2 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-2 w-full"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
