import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrder } from '../../services/api';
import Loading from '../../components/Loading';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const data = await getOrder(id);
      setOrder(data.data);
    } catch (error) {
      console.error('Error fetching order:', error);
      alert('Order not found');
      navigate('/admin/orders');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!order) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate('/admin/orders')}
          className="mb-6 text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Orders
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Order Details</h1>
              <p className="text-gray-600">Order Number: {order.orderNumber}</p>
            </div>
            <div className={`px-4 py-2 rounded-full font-semibold ${
              order.status === 'New' ? 'bg-blue-100 text-blue-800' :
              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
              order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {order.status}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Customer Info */}
            <div>
              <h2 className="text-lg font-bold mb-4">Customer Information</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Name:</span> {order.customerName}</p>
                <p><span className="font-medium">Email:</span> {order.email}</p>
                <p><span className="font-medium">Phone:</span> {order.contactNumber}</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
              <div className="text-gray-700">
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                <p>{order.shippingAddress.zipCode}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 border-b pb-4">
                  <img
                    src={item.productId?.imageUrl || 'https://via.placeholder.com/100'}
                    alt={item.productName}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.productName}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity} × ₹{item.unitPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{item.lineTotal.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-6">
            <div className="max-w-md ml-auto space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>₹{order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (18%)</span>
                <span>₹{order.tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-primary-600">₹{order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Order Date */}
          <div className="mt-6 text-sm text-gray-500">
            <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(order.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
