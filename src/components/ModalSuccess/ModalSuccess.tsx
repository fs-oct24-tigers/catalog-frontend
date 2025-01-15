import React from 'react';
import { Modal } from './Modal';
import { CheckCircle } from 'lucide-react';
import { ModalProps } from '@/types';

export const ModalSuccess: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h2 className="mb-2 text-xl font-semibold text-gray-900">Success!</h2>
        <p className="mb-4 text-gray-600">{message}</p>
        <button
          onClick={onClose}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
