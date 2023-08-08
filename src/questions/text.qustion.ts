import { Question, QuestionSet } from "nest-commander";

@QuestionSet({ name: 'text-question'})
export class TextQuestion {
    @Question({
        name: 'text',
        message: 'What do you want to ask me about?'
    })
    parseTask(val: string) {
        return val;
    }
}