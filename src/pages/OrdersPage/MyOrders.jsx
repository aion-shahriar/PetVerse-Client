import { useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Fetch only logged-in user orders
  useEffect(() => {
    if (user?.email) {
      fetch(`https://petverse-server.vercel.app/my-orders?email=${user.email}`)
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
      order.price === 0 ? "Free" : `${order.price*order.quantity}`,
      order.quantity,
      order.address,
      order.date,
      order.phone,
    ]);

    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("my-orders-report.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Orders
      </motion.h2>

      <motion.div 
        className="flex justify-end mb-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={handleDownloadPDF}
          className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Report
        </button>
      </motion.div>

      <motion.div 
        className="overflow-x-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <table className="table w-full border">
          <thead className="bg-green-100">
            <tr>
              <th>Product Name</th>
              <th>Buyer</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <motion.tr 
                key={order._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + (index * 0.1) 
                }}
              >
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
              </motion.tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <motion.p 
            className="text-center mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            No orders found.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default MyOrders;