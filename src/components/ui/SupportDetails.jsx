import { CommentOutlined, FieldTimeOutlined } from "@ant-design/icons";

function SupportDetails() {
    return (
        <div className="flex flex-col my-8 gap-3 lg:mx-50 lg:my-12">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <CommentOutlined className="text-xl md:text-2xl" />
                    <h3 className="text-base md:text-lg font-bold m-0">24hr Customer Service</h3>
                </div>
                <p className="ml-8 md:ml-10 text-xs md:text-sm text-gray-600">
                    Our dedicated support team is available around the clock to ensure your questions are answered and your concerns are addressed promptly.
                </p>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <FieldTimeOutlined className="text-xl md:text-2xl" />
                    <h3 className="text-base md:text-lg font-bold m-0">7-Day Delivery Guarantee</h3>
                </div>
                <p className="ml-8 md:ml-10 text-xs md:text-sm text-gray-600">
                    We value your time, which is why we guarantee fast and reliable delivery. Your order will be carefully processed and shipped within 7 days.
                </p>
            </div>
        </div>
    );
}

export default SupportDetails;