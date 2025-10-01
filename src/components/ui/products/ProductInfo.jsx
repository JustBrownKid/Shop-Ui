function ProductInfo({ info, field ,title}) {
  const items = Array.isArray(info[field])
    ? info[field]
    : JSON.parse(info[field] || "[]");

  return (
    <div className="mb-6">
      <p className="text-2xl font-bold mb-4">{title}</p>

      <ul className="list-disc list-inside space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-lg text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductInfo;
