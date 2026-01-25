'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Play, Clock } from 'lucide-react'
import DiagonalPattern from './DiagonalPattern'
import { Reveal } from './Reveal'
import spotifyData from '@/data/spotify.json'
import SectionBorder from './SectionBorder'

interface SpotifyTrack {
    title: string
    artist: string
    url: string
    albumArt: string
    playedAt: string
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ListeningPageClient() {
    const tracks = spotifyData as SpotifyTrack[];

    return (
        <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative bg-white dark:bg-black">
            <div className="relative mx-auto max-w-4xl min-h-screen">
                <DiagonalPattern side="left" />
                <DiagonalPattern side="right" />

                <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl px-6 sm:px-0 py-12">

                    <Reveal delay={0.1}>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to home
                        </Link>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex items-end gap-4 mb-2">
                            <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-instrument-serif)] text-neutral-900 dark:text-white leading-relaxed">
                                Listening
                            </h1>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10 leading-relaxed">
                            A collection of tracks I&apos;ve been vibing to lately. Sourced daily from <a href="https://developer.spotify.com/" className="underline">Spotify</a>
                        </p>
                    </Reveal>

                    <SectionBorder className="mb-8" />

                    <div className="grid grid-cols-1 gap-4">
                        {tracks.map((track, index) => (
                            <Reveal key={`${track.url}-${index}`} delay={0.1 + (index * 0.05)}>
                                <motion.a
                                    href={track.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
                                        <Image
                                            src={track.albumArt}
                                            alt={track.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <Play className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" size={24} fill="currentColor" />
                                        </div>
                                    </div>

                                    <div className="flex-grow min-w-0 flex flex-col justify-center">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors font-[family-name:var(--font-instrument-serif)]">
                                                {track.title}
                                            </h3>
                                            <ExternalLink size={14} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        </div>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate font-medium">
                                            {track.artist}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                                            <Clock size={12} />
                                            <span>{formatDate(track.playedAt)}</span>
                                        </div>
                                    </div>
                                </motion.a>
                            </Reveal>
                        ))}
                    </div>

                    <div className="h-20" />
                </div>
            </div>
        </div>
    )
}
