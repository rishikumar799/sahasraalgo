import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';
import { ArrowRight, BarChartHorizontalBig, Bot, Cpu, Phone, Wifi } from 'lucide-react';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';

const heroPlaceholder = PlaceHolderImages.find((img) => img.id === 'hero-chart');
const automatedTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'automated-trade');
const strategyPlaceholder = PlaceHolderImages.find((img) => img.id === 'strategy');
const lowLatencyPlaceholder = PlaceHolderImages.find((img) => img.id === 'low-latency');
const paperAutoTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'paper-auto-trade');
const communityPlaceholder = PlaceHolderImages.find((img) => img.id === 'community');

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-red-600 transition-transform hover:scale-110"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 transition-transform hover:scale-110"
  >
    <defs>
      <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0" />
        <stop stopColor="#fdf497" offset="0.05" />
        <stop stopColor="#fd5949" offset="0.45" />
        <stop stopColor="#d6249f" offset="0.6" />
        <stop stopColor="#285AEB" offset="0.9" />
      </radialGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#insta-gradient)" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#insta-gradient)" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="url(#insta-gradient)" />
  </svg>
);

const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-sky-500 transition-transform hover:scale-110"
  >
    <path d="m22 2-7 20-4-9-9-4Z" fill="#0088cc" strokeWidth={0} />
    <path d="M22 2 11 13" strokeWidth={1} stroke="white" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Button
              variant="default"
              className="rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-8 py-3 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="https://terminal.sahasraalgo.com/">LOGIN</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-black py-16 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="relative z-10 animate-fade-in-up text-center md:text-left">
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                Best Algo Trading <br />
                Platform for <br />
                Traders
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 md:mx-0 md:text-xl">
                "AI-powered trading made easy: faster execution, smarter decisions, better returns."
              </p>
              <div className="mt-10 flex justify-center gap-4 md:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="rounded-lg bg-gradient-to-b from-yellow-400 to-amber-600 px-8 py-4 text-base font-bold text-black shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="https://terminal.sahasraalgo.com/">
                    GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
              <div className="absolute inset-[-150px] rounded-full bg-yellow-500/30 blur-[120px] animate-pulse-slow" />
              {heroPlaceholder && (
                <Image
                  src={heroPlaceholder.imageUrl}
                  alt={heroPlaceholder.description}
                  fill
                  priority
                  className="z-10 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={heroPlaceholder.imageHint}
                />
              )}
               <div className="absolute top-1/4 left-1/4 h-24 w-16 -translate-x-1/2 -translate-y-1/2 animate-move-box-1 rounded-lg bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute bottom-1/4 right-1/4 h-24 w-16 translate-x-1/2 translate-y-1/2 animate-move-box-2 rounded-lg bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute z-20 bottom-0 -left-20 w-max animate-float-very-slow hidden lg:block">
                <div className="flex items-center gap-3 rounded-lg bg-black/50 p-3 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <BarChartHorizontalBig className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">Smarter decisions. Faster outcomes.</p>
                  </div>
                </div>
              </div>
               <div className="absolute z-20 top-0 -right-20 w-max animate-float-very-slow-reverse hidden lg:block">
                <div className="flex items-center gap-3 rounded-lg bg-black/50 p-3 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">Algorithmic Precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="algo-trading"
          className="w-full bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <Card className="mx-auto max-w-4xl border-0 bg-white/95 p-8 shadow-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl font-bold uppercase tracking-widest text-black sm:text-4xl">
                  Algo Trading
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center text-lg text-neutral-800">
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
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  Automated Trade Execution
                </h2>
                <p className="mt-6 text-lg text-white">
                  Trades are executed automatically based on predefined rules and algorithms
                  without manual intervention. This feature eliminates human emotions such as fear
                  and greed and ensures faster and more accurate trade placement.
                </p>
              </div>
              <div className="relative h-72 w-full md:h-96">
                {automatedTradePlaceholder && (
                  <Image
                    src={automatedTradePlaceholder.imageUrl}
                    alt={automatedTradePlaceholder.description}
                    fill
                    className="rounded-xl object-cover shadow-2xl shadow-primary/10"
                    data-ai-hint={automatedTradePlaceholder.imageHint}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="relative order-last h-72 w-full md:order-first md:h-96">
                {strategyPlaceholder && (
                  <Image
                    src={strategyPlaceholder.imageUrl}
                    alt={strategyPlaceholder.description}
                    fill
                    className="rounded-xl object-cover shadow-2xl"
                    data-ai-hint={strategyPlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="order-first md:order-last">
                <h2 className="font-headline text-4xl font-bold text-black">Strategy</h2>
                <p className="mt-6 text-lg text-black">
                  Build powerful trading strategies with ready-made plugins or customize your own.
                  Set dynamic parameters and automate execution for smarter trading.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black py-24 md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary">Low Latency</h2>
                <p className="mt-6 text-lg text-white">
                  Experience ultra-fast trade execution with low-latency infrastructure that
                  optimizes order flow through high-speed trading servers for seamless
                  transactions.
                </p>
              </div>
              <div className="relative h-72 w-full md:h-96">
                {lowLatencyPlaceholder && (
                  <Image
                    src={lowLatencyPlaceholder.imageUrl}
                    alt={lowLatencyPlaceholder.description}
                    fill
                    className="rounded-xl object-cover shadow-2xl shadow-primary/10"
                    data-ai-hint={lowLatencyPlaceholder.imageHint}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-primary/90 via-yellow-600/90 to-amber-700/90 py-24 text-black md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
              <div className="relative order-last h-72 w-full md:order-first md:h-96">
                {paperAutoTradePlaceholder && (
                  <Image
                    src={paperAutoTradePlaceholder.imageUrl}
                    alt={paperAutoTradePlaceholder.description}
                    fill
                    className="rounded-xl object-cover shadow-2xl"
                    data-ai-hint={paperAutoTradePlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="order-first md:order-last">
                <h2 className="font-headline text-4xl font-bold text-black">Paper Auto Trade</h2>
                <p className="mt-6 text-lg text-black">
                  Practice risk-free with real-market simulations. Trade virtual money in live
                  market conditions, refine your strategies, and gain confidence before real
                  investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="w-full bg-background py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center font-headline text-4xl font-bold text-white sm:text-5xl">
              Join Our Community
            </h2>
            <div className="mt-16">
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-card shadow-2xl">
                <div className="absolute -bottom-1/2 -right-1/4 h-full w-1/2 -rotate-45 bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl"></div>
                <div className="absolute -top-1/2 -left-1/4 h-full w-1/2 -rotate-45 bg-gradient-to-l from-primary/20 to-primary/5 blur-3xl"></div>

                <div className="relative bg-card/50 p-8 backdrop-blur-sm md:p-12">
                  <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                    <div className="text-center md:text-left">
                      <h3 className="font-headline text-3xl font-bold text-white">
                        Become a Part of the Sahasra Community
                      </h3>
                      <p className="mt-6 text-lg text-muted-foreground">
                        Join the Sahasra algo and Connect with Like-Minded Traders to Share Insights,
                        Strategies, and Achieve Success Together
                      </p>
                      <Button
                        size="lg"
                        className="mt-10 rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-neutral-200"
                      >
                        JOIN US TODAY
                      </Button>

                      <div className="mt-10 flex items-center justify-center gap-6 md:justify-start">
                        <Link href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
                          <InstagramIcon />
                        </Link>
                        <Link href="#" aria-label="Telegram" className="transition-transform hover:scale-110">
                          <TelegramIcon />
                        </Link>
                        <Link href="#" aria-label="YouTube" className="flex items-center gap-1 transition-transform hover:scale-110">
                          <YouTubeIcon />
                        </Link>
                      </div>

                      <div className="mt-10 border-t border-border/40 pt-8 text-center md:text-left">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">
                          Contact us
                        </p>
                        <a
                          href="tel:+919121004729"
                          className="mt-3 flex items-center justify-center gap-3 text-xl font-semibold text-white transition-colors hover:text-primary md:justify-start"
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
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-12 md:h-24 md:flex-row md:py-0">
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
