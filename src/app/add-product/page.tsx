const AddProduct = () => {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product Page</h1>
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
    </div>
  );
};
export default AddProduct;
