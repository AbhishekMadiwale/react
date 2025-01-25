const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact US page</h1>
      <form>
        <input
          className="border border-black p-2 m-2 rounded-md"
          type="text"
          placeholder="name"
        />
        <input type="text" className="border border-black p-2 m-2 rounded-md"
            placeholder="message"
        />
        <button className="border border-black p-2 rounded-md bg-green-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
