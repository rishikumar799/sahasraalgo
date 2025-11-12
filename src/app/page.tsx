import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

const heroPlaceholder = PlaceHolderImages.find((img) => img.id === 'hero-chart');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:text-left">
            <div>
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Best Algo Trading Platform for Traders
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                &quot;AI-powered trading made easy: faster execution, smarter decisions, better returns.&quot;
              </p>
              <div className="mt-8 flex justify-center gap-4 md:justify-start">
                <Button size="lg" asChild>
                  <Link href="/signup">SIGN UP</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto h-64 w-64 md:h-96 md:w-96">
              {heroPlaceholder && (
                <Image
                  src={heroPlaceholder.imageUrl}
                  alt={heroPlaceholder.description}
                  fill
                  className="rounded-lg object-cover shadow-[0_0_80px] shadow-primary/50"
                  data-ai-hint={heroPlaceholder.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="algo-trading" className="w-full bg-gradient-to-b from-yellow-600 to-yellow-700 py-20 text-black md:py-28">
          <div className="container mx-auto">
            <Card className="mx-auto max-w-4xl bg-white/90 p-8 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl font-bold uppercase tracking-widest text-black sm:text-4xl">
                  Algo Trading
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center text-lg text-neutral-800">
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
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Logo />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by you. Powered by AI.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AlgoEdge, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
