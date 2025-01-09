import React from 'react'
import { type Feature } from '@/types/feature';

export const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(feature => (
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}


