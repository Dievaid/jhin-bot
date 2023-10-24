import { Discord, Slash } from "discordx";
import { Command } from "./command";
import { CommandInteraction } from "discord.js";

import quotesFile from "../data/quotes.json" assert {type: 'json'};

interface Quote {
    quote: string,
    author: string,
}

@Discord()
export class Quoter implements Command<void, string> {
    quotes = quotesFile.quotes as Quote[];

    execute(): string {
        let idx : number = Math.floor(Math.random() * quotesFile.quotes.length);
        let quoteEntry: Quote | undefined = this.quotes.at(idx);
        if (quoteEntry) {
            return `**${quoteEntry.quote}**\n*by ${quoteEntry.author}*`;
        } else {
            throw Error("Could not find any quotes in file");
        }
    }

    @Slash({description: "Quote", name: "quote"})
    quote(cmd: CommandInteraction) : void {
        cmd.reply(this.execute());
    }
}