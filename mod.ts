`(--)x(-)x-()`;

import { $ } from "https://deno.land/x/iteruyo@v0.2.0/mod.ts"

interface ProtoOption {
    words: string[]
    filter: (str: string) => boolean
    end: (str: string) => boolean
}
function proto(option: ProtoOption) {
    return function* par(prev: string): Generator<string> {
        if (option.end(prev)) {
            yield prev
        } else {
            for (const x of option.words) {
                yield* par(prev + x)
            }
        }
    }
}

const cc = proto({
    words: ["(", ")"],
    end: str => str.length > 3,
    filter: str => true,
})

for (const value of cc("")) {
    console.log(value)
}
console.log($(cc("")).length)