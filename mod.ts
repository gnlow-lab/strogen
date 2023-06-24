`(--)x(-)x-()`;

import { $ } from "https://deno.land/x/iteruyo@v0.2.0/mod.ts"

function* par(prev: string): Generator<string> {
    const next = [
        "(",
        "x",
        ")"
    ]
    if (prev.length < 3) {
        for (const x of next) {
            yield* par(prev + x)
        }    
    } else {
        yield prev
    }
}

for (const value of par("")) {
    console.log(value)
}
console.log($(par("")).length)