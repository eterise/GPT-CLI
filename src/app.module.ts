import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GPTCommand } from './commands/gpt.command';
import { TextQuestion } from './questions/text.qustion';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [OpenaiModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [GPTCommand, TextQuestion],
})
export class AppModule {}
