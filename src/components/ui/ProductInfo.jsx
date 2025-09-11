function ProductInfo({ info }) {
    return (
        <div className="mb-6">
            <p className="text-3xl font-bold mb-4">{info.title}</p>

            <ul className="list-disc list-inside space-y-2">
                {info.description.map((item, i) => (
                    <li key={i} className="text-xl text-gray-600">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductInfo;
