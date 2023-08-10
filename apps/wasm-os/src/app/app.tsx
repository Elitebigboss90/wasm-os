import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    import("../../public/wasm_os").then(wasm => {
      alert(wasm.greet());
    });
  }, []);

  return (
    <div className="App">
      Hello WASM!
    </div>
  );
}