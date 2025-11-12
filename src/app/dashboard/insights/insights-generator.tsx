'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getInsightsAction, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, AlertCircle, Bot, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState: FormState = {
  success: false,
};

const technicalIndicators = ['RSI', 'MACD', 'Bollinger Bands', 'Moving Averages', 'Fibonacci Retracement'];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate Insights'
      )}
    </Button>
  );
}

export default function InsightsGenerator() {
  const [state, formAction] = useFormState(getInsightsAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.success && state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <form ref={formRef} action={formAction}>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Parameters</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="financial-instrument">Financial Instrument</Label>
                <Input
                  id="financial-instrument"
                  name="financialInstrument"
                  placeholder="e.g., AAPL, BTC-USD"
                />
              </div>
              <div className="grid gap-2">
                <Label>Technical Indicators</Label>
                <div className="grid gap-2 rounded-lg border p-4">
                  {technicalIndicators.map((indicator) => (
                    <div key={indicator} className="flex items-center space-x-2">
                      <Checkbox
                        id={indicator.toLowerCase().replace(/\s+/g, '-')}
                        name="technicalIndicators"
                        value={indicator}
                      />
                      <Label
                        htmlFor={indicator.toLowerCase().replace(/\s+/g, '-')}
                        className="font-normal"
                      >
                        {indicator}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </Card>
        </form>
      </div>

      <div className="lg:col-span-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Bot className="h-6 w-6 text-primary" />
                AI-Driven Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {state.success && state.analysis ? (
                <p className="text-muted-foreground">{state.analysis}</p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Your generated analysis will appear here.
                </p>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Sparkles className="h-6 w-6 text-primary" />
                AI-Driven Prediction
              </CardTitle>
            </CardHeader>
            <CardContent>
              {state.success && state.prediction ? (
                <p className="text-muted-foreground">{state.prediction}</p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Your generated prediction will appear here.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
