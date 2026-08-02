import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPlayer from './VideoPlayer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Luxury Event Portfolio — Weddings, Corporate & Private Celebrations | Vision Beyond Events",
  description: "Explore Vision Beyond Events' portfolio of luxury destination weddings in Udaipur, corporate events, haldi ceremonies, house warming, birthdays & private celebrations across India.",
  keywords: ["luxury wedding portfolio India", "destination wedding photos Udaipur", "luxury event organizer portfolio", "corporate event photos India", "palace wedding inspiration India"],
  alternates: { canonical: "https://www.vbevents.co.in/gallery" },
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let mediaFiles: string[] = [];
  
  if (fs.existsSync(galleryDir)) {
    mediaFiles = fs.readdirSync(galleryDir)
      .filter(file => !file.startsWith('.') && file !== 'page.tsx' && !file.endsWith('.mp4.jpg')); 
  }

  const categories = {
    'Marriages': mediaFiles.filter(f => f.startsWith('marriages_')),
    'Haldi Ceremonies': mediaFiles.filter(f => f.startsWith('haldi_')),
    'Birthdays': mediaFiles.filter(f => f.startsWith('birthday_')),
    'House Warming (Griha Pravesh)': mediaFiles.filter(f => f.startsWith('house_warming_') && !f.startsWith('baby_ceremony_house_warming_')),
    'Baby Ceremonies': mediaFiles.filter(f => f.startsWith('baby_ceremony_house_warming_')),
    'Corporate & School Events': mediaFiles.filter(f => f.startsWith('corporate_')),
    'Festival & Devotional Events': mediaFiles.filter(f => f.startsWith('festival_') || f.startsWith('dandiya_'))
  };

  return (
    <>
      <Navbar />

      <main className="pt-[140px] pb-20 px-6 md:px-20 w-full max-w-[1440px] mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Our Gallery</h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-body-md text-body-md text-[#475569] max-w-2xl mx-auto">
            A look at some of our most beautiful weddings, birthday parties, haldi ceremonies, and other events we have planned.
          </p>
        </div>

        {Object.entries(categories)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([categoryName, files]) => {
          if (files.length === 0) return null;
          
          return (
            <div key={categoryName} id={categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')} className="mb-24 scroll-mt-32">
              <div className="mb-8">
                <h2 className="font-headline-md text-headline-md text-primary tracking-tighter mb-2">{categoryName}</h2>
                <div className="w-16 h-px bg-primary/40"></div>
              </div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {files.map((file, i) => {
                  const isVideo = file.toLowerCase().endsWith('.mp4');
                  return (
                    <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-none glass-card hover:border-[#d4af37]/60 group relative">
                      {isVideo ? (
                        <VideoPlayer file={file} />
                      ) : (
                        <div className="relative w-full aspect-[3/4]">
                          <Image 
                            src={`/gallery/${file}`} 
                            alt={`${categoryName} Photo ${i}`} 
                            fill
                            priority={i < 2}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {mediaFiles.length === 0 && (
          <div className="col-span-full text-center text-[#475569] py-20">
            Gallery is currently updating... Please check back in a few minutes!
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}


