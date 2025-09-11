function ProductInfo({ info }) {
    return (
        <div className="mb-6">
            <p className="text-2xl font-bold mb-4">{info.title}</p>

            <ul className="list-disc list-inside space-y-2">
                {info.description.map((item, i) => (
                    <li key={i} className="text-lg text-gray-600">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductInfo;
