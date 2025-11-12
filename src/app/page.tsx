import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';
import { ArrowRight } from 'lucide-react';

const heroPlaceholder = PlaceHolderImages.find((img) => img.id === 'hero-chart');
const automatedTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'automated-trade');
const strategyPlaceholder = PlaceHolderImages.find((img) => img.id === 'strategy');
const lowLatencyPlaceholder = PlaceHolderImages.find((img) => img.id === 'low-latency');
const paperAutoTradePlaceholder = PlaceHolderImages.find((img) => img.id === 'paper-auto-trade');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button
              variant="default"
              className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
           <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-50"></div>
           <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2 md:gap-16 md:px-6 md:text-left">
            <div className="relative z-10">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Best Algo Trading Platform for Traders
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                &quot;AI-powered trading made easy: faster execution, smarter decisions, better returns.&quot;
              </p>
              <div className="mt-8 flex justify-center gap-4 md:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
              {heroPlaceholder && (
                <Image
                  src={heroPlaceholder.imageUrl}
                  alt={heroPlaceholder.description}
                  fill
                  priority
                  className="rounded-lg object-cover shadow-[0_0_80px] shadow-primary/50"
                  data-ai-hint={heroPlaceholder.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="algo-trading" className="w-full bg-gradient-to-b from-yellow-600/90 to-yellow-700/90 py-20 text-black md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="mx-auto max-w-4xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
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

        <section id="features" className="w-full bg-background py-20 md:py-28">
          <div className="container mx-auto space-y-20 px-4 md:px-6">
            {/* Automated Trade Execution */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Automated Trade Execution
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Trades are executed automatically based on predefined rules and algorithms
                  without manual intervention. This feature eliminates human emotions such as fear
                  and greed and ensures faster and more accurate trade placement.
                </p>
              </div>
              <div className="relative h-64 w-full md:h-80">
                {automatedTradePlaceholder && (
                  <Image
                    src={automatedTradePlaceholder.imageUrl}
                    alt={automatedTradePlaceholder.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={automatedTradePlaceholder.imageHint}
                  />
                )}
              </div>
            </div>

            {/* Strategy */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              <div className="relative h-64 w-full md:order-last md:h-80">
                {strategyPlaceholder && (
                  <Image
                    src={strategyPlaceholder.imageUrl}
                    alt={strategyPlaceholder.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={strategyPlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="md:order-first">
                <h2 className="font-headline text-3xl font-bold text-primary">Strategy</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Build powerful trading strategies with ready-made plugins or customize your own.
                  Set dynamic parameters and automate execution for smarter trading.
                </p>
              </div>
            </div>

            {/* Low Latency */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary">Low Latency</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Experience ultra-fast trade execution with low-latency infrastructure that
                  optimizes order flow through high-speed trading servers for seamless
                  transactions.
                </p>
              </div>
              <div className="relative h-64 w-full md:h-80">
                {lowLatencyPlaceholder && (
                  <Image
                    src={lowLatencyPlaceholder.imageUrl}
                    alt={lowLatencyPlaceholder.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={lowLatencyPlaceholder.imageHint}
                  />
                )}
              </div>
            </div>

            {/* Paper Auto Trade */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              <div className="relative h-64 w-full md:order-last md:h-80">
                {paperAutoTradePlaceholder && (
                  <Image
                    src={paperAutoTradePlaceholder.imageUrl}
                    alt={paperAutoTradePlaceholder.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={paperAutoTradePlaceholder.imageHint}
                  />
                )}
              </div>
              <div className="md:order-first">
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Paper Auto Trade
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Practice risk-free with real-market simulations. Trade virtual money in live
                  market conditions, refine your strategies, and gain confidence before real
                  investments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
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
