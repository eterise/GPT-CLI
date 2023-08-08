import { Module } from '@nestjs/common';
import { GPTCommand } from './commands/gpt.command';
import { TextQuestion } from './questions/text.qustion';

@Module({
  imports: [],
  providers: [GPTCommand, TextQuestion]
})
export class AppModule {}
