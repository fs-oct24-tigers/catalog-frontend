import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhonesCard from './PhonesCard';
import { Phone } from '@/types';

interface PhonesSliderProps {
  title: string;
  filter?: 'new' | 'hot';
}

export default function PhonesSlider({ title, filter }: PhonesSliderProps) {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPhones(data);
        } else {
          throw new Error('Invalid data format');
        }
      })
      .catch((err) => {
        console.error('Error fetching the data:', err);
        setError('Failed to load data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 250;
        const gap = 24;
        const cardsPerRow = Math.floor(
          (containerWidth + gap) / (cardWidth + gap),
        );
        setVisibleCards(cardsPerRow);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const filteredPhones = phones.filter((phone) => {
    if (filter === 'new') {
      return phone.year > 2019;
    } else if (filter === 'hot') {
      return phone.fullPrice - phone.price >= 100;
    }
    return true;
  });

  const indexOfLastPhone = currentPage * visibleCards;
  const indexOfFirstPhone = indexOfLastPhone - visibleCards;
  const currentPhones = filteredPhones.slice(
    indexOfFirstPhone,
    indexOfLastPhone,
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredPhones.length / visibleCards)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isNextDisabled =
    currentPage >= Math.ceil(filteredPhones.length / visibleCards);
  const isPrevDisabled = currentPage === 1;

  return (
    <div className="w-full mb-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 border-0"
              onClick={prevPage}
              disabled={isPrevDisabled}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 border-0"
              onClick={nextPage}
              disabled={isNextDisabled}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {error && <div className="text-red-500">{error}</div>}
        {isLoading ?
          <div className="text-white">Loading...</div>
        : currentPhones.length > 0 ?
          <div
            className="overflow-hidden"
            style={{ maxHeight: 'calc(100% - 60px)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentPhones.map((phone) => (
                <PhonesCard
                  key={phone.id}
                  phone={phone}
                  isNew={filter === 'new'}
                />
              ))}
            </div>
          </div>
        : <div className="text-white">No phones available</div>}
      </div>
    </div>
  );
}
