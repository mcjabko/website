import Link from 'next/link';
import { DiscordLogo } from 'phosphor-react';
import React from 'react'

export const DiscordBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-discord py-16">
      <div className="text-center">
        <DiscordLogo size={64} color="#fff" weight="fill" />
        <h2 className="text-3xl font-bold text-white mb-4">Máte také discord server</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Novinky, aktuality, a další informace o naší komunitě.
        </p>
        <Link
          href="https://discord.mcjabko.cz"
          className="inline-flex items-center bg-white text-discord px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Připoj se na Discord
        </Link>
      </div>
    </div>
  )
};
