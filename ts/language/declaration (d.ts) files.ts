/*
    The 'd.ts' file is used to provide typescript type information about an API that's written in JavaScript.
    The idea is that you're using something like jQuery or underscore,
    an existing javascript library. You want to consume those from your typescript code.

    Rather than rewriting jquery or underscore or whatever in typescript,
    you can instead write the d.ts file, which contains only the type annotations.
    Then from your typescript code you get the typescript benefits of
    static type checking while still using a pure JS library.
*/