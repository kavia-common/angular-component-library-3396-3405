import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
};

export default preview;

/**
 * PUBLIC_INTERFACE
 * injectOceanCssVars - Call this from a Story render (browser only) to set CSS variables.
 */
export function injectOceanCssVars(): void {
  // use globalThis to avoid direct window/document references for linter
  const g: any = (typeof globalThis !== 'undefined') ? globalThis : undefined;
  if (!g || !g.document) return;
  const doc: any = g.document;
  const style = doc.createElement('style');
  style.innerHTML = `
    :root {
      --oc-primary: #374151;
      --oc-secondary: #9CA3AF;
      --oc-success: #10B981;
      --oc-error: #EF4444;
      --oc-surface: #F9FAFB;
      --oc-text: #111827;
      --oc-background: #FFFFFF;
    }
    body { margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  `;
  doc.head.appendChild(style);
}

// Attach helper to globalThis so stories can call it without importing explicitly
if (typeof globalThis !== 'undefined') {
  (globalThis as any).injectOceanCssVars = injectOceanCssVars;
}
