import { CommentOutlined, FieldTimeOutlined } from "@ant-design/icons";

function SupportDetails() {
    return (
        <div className="flex flex-col gap-3 mt-5">
            <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                    <CommentOutlined className="text-3xl" />
                    <h3 className="text-xl font-bold m-0">24hr Customer Service</h3>
                </div>
                <p className="ml-10 text-lg text-gray-600">
                    Our dedicated support team is available around the clock to ensure your questions are answered and your concerns are addressed promptly.
                </p>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <FieldTimeOutlined className="text-3xl" />
                    <h3 className="text-xl font-bold m-0">7-Day Delivery Guarantee</h3>
                </div>
                <p className="ml-10 text-lg text-gray-600">
                    We value your time, which is why we guarantee fast and reliable delivery. Your order will be carefully processed and shipped within 7 days.
                </p>
            </div>
        </div>
    );
}

export default SupportDetails;
