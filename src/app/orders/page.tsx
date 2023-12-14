import { authOptions } from "@/utils/auth";

const OrdersPage = () => {
  return (
    <div className=" p-4 lg:px-20 2xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className=" text-left">
            <th className=" hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className=" hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-50">
            <td className=" hidden md:block py-6 px-1">123456789</td>
            <td>26.10.2023</td>
            <td>$26.10.</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1l</td>
            <td>On the Way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className=" hidden md:block py-6 px-1">123456789</td>
            <td>26.10.2023</td>
            <td>$26.10.</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1l</td>
            <td>On the Way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className=" hidden md:block py-6 px-1">123456789</td>
            <td>26.10.2023</td>
            <td>$26.10.</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1l</td>
            <td>On the Way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
