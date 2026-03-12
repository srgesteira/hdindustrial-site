/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        autoplay?: boolean;
        "rotation-per-second"?: string;
        "interaction-prompt"?: string;
        exposure?: string;
        "shadow-intensity"?: string;
        "shadow-softness"?: string;
        "environment-intensity"?: string;
        "disable-zoom"?: boolean;
        ar?: boolean;
      },
      HTMLElement
    >;
  }
}
