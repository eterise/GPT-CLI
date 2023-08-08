import { CommandRunner, Command, InquirerService } from 'nest-commander';

@Command({
  name: 'gpt',
  description: 'Send a request to OpenAI.',
  options: {
    isDefault: true,
  },
})
export class GPTCommand extends CommandRunner {
  constructor(private readonly inquire: InquirerService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    const res = await this.inquire.ask<{ text: string }>(
      'text-question',
      undefined,
    );
    console.log('its kinda working!');
  }
}
