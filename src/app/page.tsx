import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Bot, LineChart, TrendingUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';

const featurePlaceholders = {
  ai: PlaceHolderImages.find((img) => img.id === 'feature-ai'),
  automation: PlaceHolderImages.find((img) => img.id === 'feature-automation'),
  data: PlaceHolderImages.find((img) => img.id === 'feature-data'),
};

const heroPlaceholder = PlaceHolderImages.find((img) => img.id === 'hero-image');

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
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          {heroPlaceholder && (
            <Image
              src={heroPlaceholder.imageUrl}
              alt={heroPlaceholder.description}
              fill
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
              data-ai-hint={heroPlaceholder.imageHint}
            />
          )}
          <div className="container mx-auto text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Trade Smarter with <span className="text-primary">AlgoEdge</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Leverage the power of AI to generate trading insights, automate your strategies, and stay ahead of the market.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Start Your Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="w-full bg-card py-20 md:py-28">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Core Features</h2>
              <p className="mt-4 text-muted-foreground">Everything you need for an edge in algorithmic trading.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col">
                {featurePlaceholders.ai && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={featurePlaceholders.ai.imageUrl}
                      alt={featurePlaceholders.ai.description}
                      width={600}
                      height={400}
                      className="h-full w-full rounded-t-lg object-cover"
                      data-ai-hint={featurePlaceholders.ai.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    AI Trading Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Generate sophisticated analysis and predictions using our advanced AI, considering various technical indicators to inform your decisions.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                {featurePlaceholders.automation && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={featurePlaceholders.automation.imageUrl}
                      alt={featurePlaceholders.automation.description}
                      width={600}
                      height={400}
                      className="h-full w-full rounded-t-lg object-cover"
                      data-ai-hint={featurePlaceholders.automation.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <Bot className="h-6 w-6 text-primary" />
                    Automated Trading
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Set your parameters based on AI insights and let our platform execute trades for you, 24/7. Never miss an opportunity.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                {featurePlaceholders.data && (
                  <div className="relative h-48 w-full">
                     <Image
                      src={featurePlaceholders.data.imageUrl}
                      alt={featurePlaceholders.data.description}
                      width={600}
                      height={400}
                      className="h-full w-full rounded-t-lg object-cover"
                      data-ai-hint={featurePlaceholders.data.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <LineChart className="h-6 w-6 text-primary" />
                    Real-time Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Access current market data through interactive charts and graphs, allowing you to visualize trends and make timely decisions.</p>
                </CardContent>
              </Card>
            </div>
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
