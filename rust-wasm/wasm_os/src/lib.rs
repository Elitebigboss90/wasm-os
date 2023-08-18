extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
mod kernel;

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello, WebAssembly!".to_string()
}