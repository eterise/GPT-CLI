import { CommandRunner, Command, InquirerService } from 'nest-commander';
import { OpenaiService } from 'src/openai/openai.service';

@Command({
  name: 'gpt',
  description: 'Send a request to OpenAI.',
  options: {
    isDefault: true,
  },
})
export class GPTCommand extends CommandRunner {
  constructor(
    private readonly inquire: InquirerService,
    private readonly openaiService: OpenaiService,
  ) {
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
    const aiResp = await this.openaiService.generateResponse([
      { role: 'user', content: res.text },
    ]);

    console.log(aiResp);
  }
}
