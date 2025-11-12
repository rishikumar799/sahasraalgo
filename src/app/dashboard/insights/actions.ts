'use server';

import { generateTradingInsights } from '@/ai/flows/generate-trading-insights';
import { z } from 'zod';

const insightsSchema = z.object({
  financialInstrument: z.string().min(1, 'Financial instrument is required.'),
  technicalIndicators: z.array(z.string()).min(1, 'Select at least one indicator.'),
});

export type FormState = {
  analysis?: string;
  prediction?: string;
  error?: string;
  success: boolean;
};

export async function getInsightsAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const financialInstrument = formData.get('financialInstrument');
  const technicalIndicators = formData.getAll('technicalIndicators');

  const validatedFields = insightsSchema.safeParse({
    financialInstrument,
    technicalIndicators,
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      success: false,
      error:
        fieldErrors.financialInstrument?.[0] ||
        fieldErrors.technicalIndicators?.[0] ||
        'Invalid input.',
    };
  }

  try {
    const result = await generateTradingInsights(validatedFields.data);
    return { ...result, success: true };
  } catch (e) {
    return {
      success: false,
      error: 'Failed to generate insights. Please try again.',
    };
  }
}
