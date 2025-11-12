import InsightsGenerator from './insights-generator';

export default function AIInsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">AI-Powered Insights</h1>
        <p className="text-muted-foreground">
          Generate trading insights for any financial instrument using cutting-edge AI.
        </p>
      </div>
      <InsightsGenerator />
    </div>
  );
}
