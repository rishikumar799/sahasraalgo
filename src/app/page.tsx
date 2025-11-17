
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';
import { ArrowRight, Phone, Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const heroPlaceholder = PlaceHolderImages.find((img) => img.id === 'hero-chart');
const automatedTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'automated-trade');
const strategyPlaceholder = PlaceHolderImages.find((img) => img.id === 'strategy');
const lowLatencyPlaceholder = PlaceHolderImages.find((img) => img.id === 'low-latency');
const paperAutoTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'paper-auto-trade');
const communityPlaceholder = PlaceHolderImages.find((img) => img.id === 'community');


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-6 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="transition-colors hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#community" className="transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-end space-x-4">
             <Button
              variant="default"
              className="hidden sm:flex rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-6 py-2 text-xs font-bold text-black shadow-lg transition-transform hover:scale-105 sm:px-8 sm:py-3 sm:text-sm"
              asChild
            >
              <Link href="https://terminal.sahasraalgo.com/">LOGIN</Link>
            </Button>
            <div className="md:hidden">
               <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo />
                    </Link>
                    <nav className="flex flex-col gap-4">
                      <SheetClose asChild>
                        <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                          Home
                        </Link>
                      </SheetClose>
                       <SheetClose asChild>
                         <Link href="#about" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                           About
                         </Link>
                       </SheetClose>
                       <SheetClose asChild>
                         <Link href="#features" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                           Features
                         </Link>
                       </SheetClose>
                       <SheetClose asChild>
                         <Link href="#community" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                           Contact Us
                         </Link>
                       </SheetClose>
                    </nav>
                     <Button
                        variant="default"
                        className="w-full rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-6 py-2 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105"
                        asChild
                      >
                        <Link href="https://terminal.sahasraalgo.com/">LOGIN</Link>
                      </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-14">
        <section className="relative w-full overflow-hidden bg-black py-16 md:py-20 lg:py-24">
          <Image
            src="/images/27324.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20 z-0"
            data-ai-hint="automated trading"
          />
          <div className="absolute inset-0 z-0">
            <div className="absolute left-1/4 top-0 h-72 w-72 animate-fade-in-out-slow-1 rounded-full bg-yellow-500/20 blur-[200px]"></div>
            <div className="absolute bottom-0 right-1/4 h-72 w-72 animate-fade-in-out-slow-2 rounded-full bg-primary/20 blur-[200px]"></div>
          </div>
          <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="animate-fade-in-up text-center md:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Best Algo Trading <br />
                Platform for <br />
                Traders
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300 md:mx-0 md:text-lg lg:text-xl">
                "AI-powered trading made easy: faster execution, smarter decisions, better returns."
              </p>
              <div className="mt-10 flex justify-center gap-4 md:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-8 py-4 text-base font-bold text-black shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="https://terminal.sahasraalgo.com/auth/login">
                    GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto flex h-[500px] w-[500px] items-center justify-center">
              <div className="absolute inset-0 animate-fade-in-out-slow-1 rounded-full bg-gradient-to-tr from-yellow-500/30 to-amber-600/10 blur-3xl"></div>
              {heroPlaceholder && (
                 <div className="relative h-[500px] w-[500px] animate-float">
                    <Image
                      src={heroPlaceholder.imageUrl}
                      alt={heroPlaceholder.description}
                      width={500}
                      height={500}
                      priority
                      className="z-10 rounded-xl object-cover h-full w-full opacity-90"
                      data-ai-hint={heroPlaceholder.imageHint}
                    />
                    <div className="absolute inset-0 z-20 rounded-xl bg-gradient-to-tr from-yellow-400/20 to-amber-600/10 mix-blend-overlay"></div>
                  </div>
              )}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <Card className="mx-auto max-w-4xl border-0 bg-white/95 p-6 shadow-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-primary/20 md:p-8">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl font-bold uppercase tracking-widest text-black sm:text-3xl md:text-4xl">
                  About Sahasra Algo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center text-base text-neutral-800 md:text-lg">
                <p>
                  Sahasra Algo Trading is a trusted provider of advanced algorithmic trading
                  solutions, helping investors and institutions automate trades with precision and
                  speed. Our platform combines cutting-edge AI and quantitative strategies to
                  deliver efficient, data-driven trading across multiple asset classes.
                </p>
                <p>
                  With a skilled team focused on innovation and reliability, we ensure secure and
                  transparent systems that adapt to the changing markets. Sahasra is committed
                  to empowering clients with technology to optimize their trading performance and
                  achieve lasting financial success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="features" className="w-full">
          <div className="bg-black py-24 md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  Automated Trade Execution
                </h2>
                <p className="mt-6 text-base text-white md:text-lg">
                  Trades are executed automatically based on predefined rules and algorithms
                  without manual intervention. This feature eliminates human emotions such as fear
                  and greed and ensures faster and more accurate trade placement.
                </p>
              </div>
              <div className="relative h-64 w-full md:h-96">
                <div className="absolute inset-[-100px] rounded-full bg-primary/20 blur-[100px] animate-pulse-slow" />
                {automatedTradePlaceholder && (
                  <Image
                    src={automatedTradePlaceholder.imageUrl}
                    alt={automatedTradePlaceholder.description}
                    fill
                    className="z-10 rounded-xl object-cover shadow-2xl shadow-primary/10"
                    data-ai-hint={automatedTradePlaceholder.imageHint}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="relative order-last h-64 w-full md:order-first md:h-96">
                <div className="absolute inset-[-100px] rounded-full bg-black/20 blur-[100px] animate-pulse-slow" />
                {strategyPlaceholder && (
                  <Image
                    src={strategyPlaceholder.imageUrl}
                    alt={strategyPlaceholder.description}
                    fill
                    className="z-10 rounded-xl object-cover shadow-2xl"
                    data-ai-hint={strategyPlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="order-first text-center md:order-last md:text-left">
                <h2 className="font-headline text-3xl font-bold text-black md:text-4xl">Strategy</h2>
                <p className="mt-6 text-base text-black md:text-lg">
                  Build powerful trading strategies with ready-made plugins or customize your own.
                  Set dynamic parameters and automate execution for smarter trading.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black py-24 md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Low Latency</h2>
                <p className="mt-6 text-base text-white md:text-lg">
                  Experience ultra-fast trade execution with low-latency infrastructure that
                  optimizes order flow through high-speed trading servers for seamless
                  transactions.
                </p>
              </div>
              <div className="relative h-64 w-full md:h-96">
                <div className="absolute inset-[-100px] rounded-full bg-primary/20 blur-[100px] animate-pulse-slow" />
                {lowLatencyPlaceholder && (
                  <Image
                    src={lowLatencyPlaceholder.imageUrl}
                    alt={lowLatencyPlaceholder.description}
                    fill
                    className="z-10 rounded-xl object-cover shadow-2xl shadow-primary/10"
                    data-ai-hint={lowLatencyPlaceholder.imageHint}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="relative order-last h-64 w-full md:order-first md:h-96">
                <div className="absolute inset-[-100px] rounded-full bg-black/20 blur-[100px] animate-pulse-slow" />
                {paperAutoTradePlaceholder && (
                  <Image
                    src={paperAutoTradePlaceholder.imageUrl}
                    alt={paperAutoTradePlaceholder.description}
                    fill
                    className="z-10 rounded-xl object-cover shadow-2xl"
                    data-ai-hint={paperAutoTradePlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="order-first text-center md:order-last md:text-left">
                <h2 className="font-headline text-3xl font-bold text-black md:text-4xl">Paper Auto Trade</h2>
                <p className="mt-6 text-base text-black md:text-lg">
                  Practice risk-free with real-market simulations. Trade virtual money in live
                  market conditions, refine your strategies, and gain confidence before real
                  investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="w-full bg-black py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center font-headline text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Join Our Community
            </h2>
            <div className="mt-16">
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-card shadow-2xl">
                <div className="absolute -bottom-1/2 -right-1/4 h-full w-1/2 -rotate-45 bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl"></div>
                <div className="absolute -top-1/2 -left-1/4 h-full w-1/2 -rotate-45 bg-gradient-to-l from-primary/20 to-primary/5 blur-3xl"></div>

                <div className="relative bg-card/50 p-8 backdrop-blur-sm md:p-12">
                  <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                    <div className="text-center md:text-left">
                      <h3 className="font-headline text-2xl font-bold text-white md:text-3xl">
                        Become a Part of the Sahasra Community
                      </h3>
                      <p className="mt-6 text-base text-muted-foreground md:text-lg">
                        Join the Sahasra algo and Connect with Like-Minded Traders to Share Insights,
                        Strategies, and Achieve Success Together
                      </p>
                      <Button
                        size="lg"
                        asChild
                        className="mt-10 rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-8 py-4 text-base font-bold text-black shadow-lg transition-transform hover:scale-105"
                      >
                        <Link href="https://terminal.sahasraalgo.com/auth/login">JOIN US TODAY</Link>
                      </Button>

                      <div className="mt-10 flex items-center justify-center gap-6 md:justify-start">
                        <Link href="https://www.instagram.com/sahasra_trading?igsh=MTljOGpxZThoNWxxZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
                           <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
                        </Link>
                        <Link href="https://wa.me/919121004729" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-transform hover:scale-110">
                           <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                        </Link>
                        <Link href="https://youtube.com/@sahasra-atradingcommunity824?si=cBxvuhXun9YnEk-g" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-transform hover:scale-110">
                           <Image src="/images/youtube.png" alt="YouTube" width={32} height={32} />
                        </Link>
                      </div>

                      <div className="mt-10 border-t border-border/40 pt-8 text-center md:text-left">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">
                          Contact us
                        </p>
                        <a
                          href="tel:+919121004729"
                          className="mt-3 flex items-center justify-center gap-3 text-lg font-semibold text-white transition-colors hover:text-primary md:justify-start md:text-xl"
                        >
                          <Phone className="h-5 w-5 text-green-500" />
                          <span>+91 9121004729</span>
                        </a>
                      </div>
                    </div>
                    <div className="relative hidden h-72 w-full md:block md:h-96">
                      {communityPlaceholder && (
                        <Image
                          src={communityPlaceholder.imageUrl}
                          alt={communityPlaceholder.description}
                          fill
                          className="rounded-lg object-cover"
                          data-ai-hint={communityPlaceholder.imageHint}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Logo />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by you. Powered by AI.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Sahasra, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
