#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE

int compute(int a, int b) {
    // Loads of maths
    return a + 2 * b;
}
