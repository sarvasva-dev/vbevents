import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import VideoPlayer from './VideoPlayer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Vision Boards | Vision Beyond Events",
  description: "Explore our vision boards for bespoke celebrations, destination weddings, and corporate galas.",
  keywords: ["Event Inspiration", "Luxury Wedding Vision Boards", "Corporate Event Concepts", "Premium Event Design"],
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
    'Dandiya Nights': mediaFiles.filter(f => f.startsWith('dandiya_')),
    'Corporate & School Events': mediaFiles.filter(f => f.startsWith('corporate_')),
    'Festival & Devotional Events': mediaFiles.filter(f => f.startsWith('festival_'))
  };

  return (
    <>
      <Navbar />

      <main className="pt-[140px] pb-20 px-6 md:px-20 w-full max-w-[1440px] mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tighter">Inspiration & Vision Boards</h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Explore curated design concepts and inspirations for your upcoming celebration.
          </p>
        </div>

        {Object.entries(categories)
          .sort((a, b) => b[1].length - a[1].length)
          .map(([categoryName, files]) => {
          if (files.length === 0) return null;
          
          return (
            <div key={categoryName} className="mb-24">
              <div className="mb-8">
                <h2 className="font-headline-md text-headline-md text-primary tracking-tighter mb-2">{categoryName}</h2>
                <div className="w-16 h-px bg-primary/40"></div>
              </div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {files.map((file, i) => {
                  const isVideo = file.toLowerCase().endsWith('.mp4');
                  return (
                    <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg bg-[#121212] ghost-border group relative">
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
          <div className="col-span-full text-center text-on-surface-variant py-20">
            Gallery is currently updating... Please check back in a few minutes!
          </div>
        )}
      </main>

      <footer className="w-full py-20 bg-surface-dim border-t border-primary/10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 gap-8 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="font-headline-md text-headline-md text-primary tracking-tighter">Vision Beyond Events</div>
            <div className="font-body-md text-on-surface-variant flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>📞 +91 80818 08902</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/" className="hover:text-primary transition-colors">Instagram (Coming Soon)</Link>
            </div>
          </div>
          <div className="flex gap-8">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Privacy Policy</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Terms of Service</Link>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant text-center lg:text-right">
              © {new Date().getFullYear()} Vision Beyond Events.<br/>Crafting Memories Since 2024.
          </div>
        </div>
      </footer>
    </>
  );
}
