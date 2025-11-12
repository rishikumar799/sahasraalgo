// This is a server-side code.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating AI-driven trading insights.
 *
 * - generateTradingInsights - A function that generates trading insights based on a given financial instrument and technical indicators.
 * - GenerateTradingInsightsInput - The input type for the generateTradingInsights function.
 * - GenerateTradingInsightsOutput - The return type for the generateTradingInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTradingInsightsInputSchema = z.object({
  financialInstrument: z.string().describe('The financial instrument to analyze (e.g., AAPL, BTC).'),
  technicalIndicators: z.array(z.string()).describe('A list of technical indicators to consider (e.g., RSI, MACD).'),
});
export type GenerateTradingInsightsInput = z.infer<typeof GenerateTradingInsightsInputSchema>;

const GenerateTradingInsightsOutputSchema = z.object({
  analysis: z.string().describe('The AI-driven analysis of the financial instrument.'),
  prediction: z.string().describe('The AI-driven prediction for the financial instrument.'),
});
export type GenerateTradingInsightsOutput = z.infer<typeof GenerateTradingInsightsOutputSchema>;

export async function generateTradingInsights(input: GenerateTradingInsightsInput): Promise<GenerateTradingInsightsOutput> {
  return generateTradingInsightsFlow(input);
}

const getTradingInsights = ai.defineTool(
  {
    name: 'getTradingInsights',
    description: 'Generate trading insights for a given financial instrument based on technical indicators.',
    inputSchema: GenerateTradingInsightsInputSchema,
    outputSchema: GenerateTradingInsightsOutputSchema,
  },
  async (input) => {
    return {
      analysis: `AI analysis for ${input.financialInstrument} based on ${input.technicalIndicators.join(', ')}. This is a mock analysis.`, // Replace with actual analysis logic
      prediction: `AI prediction for ${input.financialInstrument}. This is a mock prediction.`, // Replace with actual prediction logic
    };
  }
);

const tradingInsightsPrompt = ai.definePrompt({
  name: 'tradingInsightsPrompt',
  tools: [getTradingInsights],
  input: {schema: GenerateTradingInsightsInputSchema},
  output: {schema: GenerateTradingInsightsOutputSchema},
  prompt: `You are an AI trading assistant. Please analyze the given financial instrument, consider the technical indicators, and provide an informed prediction.

Financial Instrument: {{{financialInstrument}}}
Technical Indicators: {{#each technicalIndicators}}{{{this}}} {{/each}}

Use the getTradingInsights tool to generate the analysis and prediction.
`,
});

const generateTradingInsightsFlow = ai.defineFlow(
  {
    name: 'generateTradingInsightsFlow',
    inputSchema: GenerateTradingInsightsInputSchema,
    outputSchema: GenerateTradingInsightsOutputSchema,
  },
  async input => {
    const {output} = await tradingInsightsPrompt(input);
    return output!;
  }
);
