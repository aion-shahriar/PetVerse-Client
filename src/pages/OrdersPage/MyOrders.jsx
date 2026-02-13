import { useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Fetch only logged-in user orders
  useEffect(() => {
    if (user?.email) {
      fetch(`https://your-server-url/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  // PDF Download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("My Orders Report", 14, 15);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = orders.map((order) => [
      order.productName,
      order.buyerName,
      order.price === 0 ? "Free" : `৳ ${order.price}`,
      order.quantity,
      order.address,
      order.date,
      order.phone,
    ]);

    autoTable(doc, {
      startY: 20,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("my-orders-report.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Orders
      </h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-primary text-white px-6 py-2 rounded-lg"
        >
          Download Report
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Product Name</th>
              <th>Buyer</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.productName}</td>
                <td>{order.buyerName}</td>
                <td>
                  {order.price === 0
                    ? "Free"
                    : `৳ ${order.price}`}
                </td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-center mt-8 text-gray-500">
            No orders found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;