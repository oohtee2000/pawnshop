// components/SellerNotifications.tsx
'use client';

import React, { useState } from 'react';
import { Bell, Check, CheckCircle, Clock, DollarSign, Eye, MessageSquare, Package, Star, Trash2, } from 'lucide-react';

interface Notification {
  id: string;
  type: 'sale' | 'offer' | 'inquiry' | 'listing' | 'payment' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  itemName?: string;
  itemId?: string;
  amount?: number;
  buyerName?: string;
}

const SellerNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'sale',
      title: 'Item Sold!',
      message: 'Your vintage gold watch has been sold to John Smith.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      isRead: false,
      itemName: 'Vintage Gold Watch',
      itemId: 'item_123',
      amount: 450,
      buyerName: 'John Smith'
    },
    {
      id: '2',
      type: 'offer',
      title: 'New Offer Received',
      message: 'You received an offer of $320 for your diamond ring.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      isRead: false,
      itemName: 'Diamond Ring',
      itemId: 'item_456',
      amount: 320,
      buyerName: 'Sarah Johnson'
    },
    {
      id: '3',
      type: 'inquiry',
      title: 'Buyer Inquiry',
      message: 'A potential buyer asked about the condition of your antique vase.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      isRead: true,
      itemName: 'Antique Vase',
      itemId: 'item_789'
    },
    {
      id: '4',
      type: 'listing',
      title: 'Item Listed Successfully',
      message: 'Your silver necklace has been approved and is now live on the marketplace.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      isRead: true,
      itemName: 'Silver Necklace',
      itemId: 'item_101'
    },
    {
      id: '5',
      type: 'payment',
      title: 'Payment Processed',
      message: 'Payment of $450 for your vintage gold watch has been processed to your account.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
      isRead: true,
      amount: 450
    }
  ]);

type FilterType = 'all' | 'unread' | 'sales' | 'offers';
const [filter, setFilter] = useState<FilterType>('all');


  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'sale':
        return <DollarSign className="h-5 w-5 text-green-600" />;
      case 'offer':
        return <Star className="h-5 w-5 text-yellow-600" />;
      case 'inquiry':
        return <MessageSquare className="h-5 w-5 text-blue-600" />;
      case 'listing':
        return <Package className="h-5 w-5 text-purple-600" />;
      case 'payment':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    switch (filter) {
      case 'unread':
        return !notif.isRead;
      case 'sales':
        return notif.type === 'sale';
      case 'offers':
        return notif.type === 'offer';
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600 mt-1">
                  {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All notifications read'}
                </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <button
  onClick={markAllAsRead}
  className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
>
  <Check className="h-4 w-4 mr-2" />
  Mark All Read
</button>

            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm">
          {[
            { key: 'all', label: 'All', count: notifications.length },
{ key: 'unread', label: 'Unread', count: unreadCount },
{ key: 'sales', label: 'Sales', count: notifications.filter(n => n.type === 'sale').length },
{ key: 'offers', label: 'Offers', count: notifications.filter(n => n.type === 'offer').length }

          ].map(({ key, label, count }) => (
            <button
              key={key}
             onClick={() => setFilter(key as FilterType)}

              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="p-8 text-center rounded-md border border-gray-200 bg-white shadow-sm">
  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
  <p className="text-gray-600">
    {filter === 'all' 
      ? "You don't have any notifications yet." 
      : `No ${filter} notifications found.`}
  </p>
</div>

          ) : (
            filteredNotifications.map((notification) => (
              <div
  key={notification.id}
  className={`p-6 rounded-md border transition-all hover:shadow-md ${
    !notification.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : 'border-gray-200'
  }`}
>
  <div className="flex items-start justify-between">
    <div className="flex items-start space-x-4 flex-1">
      <div className="flex-shrink-0 mt-1">
        {getNotificationIcon(notification.type)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {notification.title}
          </h3>
          {!notification.isRead && (
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
          )}
        </div>

        <p className="text-gray-700 mb-2">{notification.message}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {formatTimeAgo(notification.timestamp)}
          </span>

          {notification.itemName && (
            <span className="flex items-center">
              <Package className="h-4 w-4 mr-1" />
              {notification.itemName}
            </span>
          )}

          {notification.amount && (
            <span className="flex items-center font-semibold text-green-600">
              <DollarSign className="h-4 w-4 mr-1" />
              ${notification.amount}
            </span>
          )}
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-2 ml-4">
      {!notification.isRead && (
        <button
          onClick={() => markAsRead(notification.id)}
          className="p-2 text-blue-600 hover:text-blue-700 focus:outline-none"
        >
          <Eye className="h-4 w-4" />
        </button>
      )}
      <button
        onClick={() => deleteNotification(notification.id)}
        className="p-2 text-red-600 hover:text-red-700 focus:outline-none"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  </div>

  {(notification.type === 'offer' || notification.type === 'inquiry') && (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="flex space-x-3">
        {notification.type === 'offer' && (
          <>
            <button
              className="px-4 py-2 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none"
              onClick={() => alert('Offer accepted')}
            >
              Accept Offer
            </button>
            <button
              className="px-4 py-2 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none"
              onClick={() => alert('Offer declined')}
            >
              Decline Offer
            </button>
          </>
        )}
        {notification.type === 'inquiry' && (
          <button
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            onClick={() => {
              alert(`Replying to inquiry about ${notification.itemName}`);
            }}
          >
            Reply
          </button>
        )}
      </div>
    </div>
  )}
</div>

            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerNotifications;