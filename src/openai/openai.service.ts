import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ChatCompletionRequestMessage,
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
} from 'openai';

@Injectable()
export class OpenaiService {
  private openAI: OpenAIApi;

  constructor(configService: ConfigService) {
    const apiKey = configService.getOrThrow<string>('OPENAI_API_KEY');
    const config = new Configuration({
      apiKey,
    });
    this.openAI = new OpenAIApi(config);
  }

  async generateResponse(messages: ChatCompletionRequestMessage[]) {
    const params: CreateChatCompletionRequest = {
      model: 'gpt-3.5-turbo',
      messages,
    };

    return new Promise((resolve, reject) => {
      this.openAI
        .createChatCompletion(params)
        .then((res) => {
          return resolve(res.data.choices[0].message.content);
        })
        .catch((err) => {
          reject(
            err instanceof Error
              ? err.message
              : 'Произошла неизвестная ошибка!',
          );
        });
    });
  }
}
