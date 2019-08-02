# Sample-WASM-App
This simple WASM app uses a C `.wasm` binary and some javascript injection to perform a basic math operation.

## How to run:

From the project's root directory
```bash
GOOS=js GOARCH=wasm go build -o public/main.wasm
```

Ensure that Go's `wasm_exec.js` file is also being served from the public folder.
This is a harness for the page's javascript to access the Go WASM binary.
This this javascript file may be copied from the GOROOT:

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ./public
```


#### Reference:
The following hackaday article inspired this project
- https://hackaday.com/2019/04/04/webassembly-what-is-it-and-why-should-you-care/
