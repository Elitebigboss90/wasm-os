

import { ExecutorContext, logger } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { copySync } from 'fs-extra';

interface RustWasmBuilderOptions {
  reactAppName: string;
}

export function buildRustWasm(
    options: RustWasmBuilderOptions,
    context: ExecutorContext
): Promise<{ success: boolean }> {
    logger.info('Building Rust project to WebAssembly...');
  try {
    // Navigate to the Rust directory and build
    // execSync('wasm-pack build --target web', {
    //   cwd: 'rust-wasm/wasm_os',
    //   stdio: 'inherit'
    // });

    execSync('wasm-bindgen target/wasm32-unknown-unknown/release/wasm_os.wasm --out-dir build', {
      cwd: 'rust-wasm/wasm_os',
      stdio: 'inherit'
    });

    // Copy the pkg directory to the React app's public directory
    copySync(
      'rust-wasm/wasm_os/build',
      `apps/${options.reactAppName}/public/wasm_os`
    );

    return Promise.resolve({ success: true });
  } catch (error) {
    logger.error('Failed to build Rust project.' + error);
    return Promise.resolve({ success: false });
  }
}

export default buildRustWasm;