'use client';

import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  description: string;
  onClose?: () => void;
  duration?: number;
}

export default function Notification({
  message,
  description,
  onClose,
  duration = 3000,
}: NotificationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 w-80">
      <div className="relative overflow-hidden rounded-lg bg-zinc-900 text-white shadow-lg">
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-500/20 p-1">
              <Check className="h-4 w-4 text-green-500" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium leading-none">{message}</h3>
              <p className="mt-1 text-sm text-zinc-400">{description}</p>
            </div>

            <button
              onClick={() => {
                setShow(false);
                onClose?.();
              }}
              className="text-zinc-400 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative h-1 w-full bg-zinc-800">
          <div
            className="absolute bottom-0 left-0 h-full w-full bg-green-500 animate-progress"
            style={{
              animationDuration: `${duration}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
