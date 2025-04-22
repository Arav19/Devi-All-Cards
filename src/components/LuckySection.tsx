import React from 'react';
import LuckyCard from './LuckyCard';

const LuckySection = () => {
  const luckyItems = [
    {
      title: "Lucky Mantra",
      value: "Om Shreem Hreem Kleem",
      sanskritText: "ॐ श्रीं ह्रीं क्लीं",
      description: "Chant this mantra 108 times for divine blessings."
    },
    {
      title: "Lucky Color",
      value: "Saffron Orange",
      description: "Wear this color today to enhance your spiritual energy.",
      color: "#FF7F00"
    },
    {
      title: "Lucky Number",
      value: "108",
      description: "Use this number for important decisions today."
    },
    {
      title: "Auspicious Time",
      value: "4:24 AM - 5:12 AM",
      description: "Divine energies will be strongest at this time."
    }
  ];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
            Your Daily Blessings
          </span>
        </h2>
        <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
          Click each card to reveal your mystical guidance for today.
        </p>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {luckyItems.map((item, index) => (
              <LuckyCard
                key={index}
                title={item.title}
                value={item.value}
                description={item.description}
                color={item.color}
                sanskritText={item.sanskritText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuckySection;