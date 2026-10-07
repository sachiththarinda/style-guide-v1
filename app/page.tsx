import { ThemeToggle } from "./theme-toggle";

const brandColors = [
  { name: "Primary", cls: "bg-primary", token: "--color-primary" },
  { name: "Secondary", cls: "bg-secondary", token: "--color-secondary" },
  { name: "Dark", cls: "bg-dark", token: "--color-dark" },
  { name: "Light", cls: "bg-light border border-line", token: "--color-light" },
  {
    name: "Dark secondary",
    cls: "bg-dark-secondary",
    token: "--color-dark-secondary",
  },
  {
    name: "Light secondary",
    cls: "bg-light-secondary",
    token: "--color-light-secondary",
  },
  { name: "Accent", cls: "bg-accent", token: "--color-accent" },
  { name: "Success", cls: "bg-success", token: "--color-success" },
  { name: "Danger", cls: "bg-danger", token: "--color-danger" },
];

const shadows = [
  ["xxs", "shadow-xxs"],
  ["xs", "shadow-xs"],
  ["sm", "shadow-sm"],
  ["md", "shadow-md"],
  ["lg", "shadow-lg"],
  ["xl", "shadow-xl"],
  ["2xl", "shadow-2xl"],
  ["3xl", "shadow-3xl"],
];
const weights = ["light", "regular", "medium", "semibold", "bold"] as const;
const weightCls = {
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};
const paras = [
  { name: "p1", cls: "text-p1" },
  { name: "p2", cls: "text-p2" },
  { name: "p3", cls: "text-p3" },
  { name: "p4", cls: "text-p4" },
];

function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-wrap gap-(--space-gap) border-t border-line py-(--space-section)">
      <div className="flex-[1_1_16rem]">
        <h2 className="heading-3">{title}</h2>
        <p className="mt-4 text-p4 text-fg-muted">{intro}</p>
      </div>
      <div className="flex-[3_1_24rem]">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xs bg-secondary px-2 py-0.5 font-sans text-label text-light">
      {children}
    </span>
  );
}

const headings = [
  { name: "Heading Display", cls: "heading-display", size: "10rem" },
  { name: "Heading 1", cls: "heading-1", size: "5rem" },
  { name: "Heading 2", cls: "heading-2", size: "4rem" },
  { name: "Heading 3", cls: "heading-3", size: "3rem" },
  { name: "Heading 4", cls: "heading-4", size: "2.25rem" },
  { name: "Heading 5", cls: "heading-5", size: "1.75rem" },
  { name: "Heading 6", cls: "heading-6", size: "1.25rem" },
];

const buttonVariants = [
  ["Primary", "btn-primary"],
  ["Secondary", "btn-secondary"],
  ["Dark", "btn-dark"],
  ["Outline", "btn-outline"],
  ["Outline primary", "btn-outline-primary"],
];

export default function StyleGuide() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-primary px-(--space-gutter) py-(--space-hero) text-center text-light">
        <div className="mx-auto max-w-page">
          <p className="label-text tracking-widest">Code by Sachith</p>
          <h1 className="heading-display mt-6">Style Guide</h1>
          <p className="mt-4 text-p4">
            Consistency at scale{" "}
            <span className="ml-2 rounded-xs bg-light px-2 py-0.5 text-label text-dark">
              v1.0.0
            </span>
          </p>
          <div className="mt-8 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-page px-(--space-gutter)">
        {/* Typography */}
        <Section
          title="Typography"
          intro="Display font for headings, Inter for body copy. Change --text-* and --font-* in globals.css."
        >
          <div className="divide-y divide-line">
            {headings.map((h) => (
              <div key={h.name} className="flex flex-col gap-2 py-6 first:pt-0">
                <div className="flex items-center gap-2">
                  <Tag>{h.cls}</Tag>
                  <span className="text-label text-fg-muted">{h.size}</span>
                </div>
                <p className={h.cls}>{h.name}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Paragraphs */}
        <Section
          title="Paragraphs"
          intro="Four body sizes, p1 (largest) to p4 (smallest). Weight comes from font-* utilities."
        >
          <div className="divide-y divide-line">
            {paras.map((p) => (
              <div key={p.name} className="flex flex-col gap-2 py-6 first:pt-0">
                <Tag>{p.name}</Tag>
                <p className={`${p.cls} max-w-prose`}>
                  Sample text is being used as a placeholder for real text that
                  is normally present on your website.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Weights */}
        <Section
          title="Font weights"
          intro="Inter weights, applied with font-light through font-bold."
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4">
            {weights.map((w) => (
              <div key={w} className="card">
                <Tag>font-{w}</Tag>
                <p className={`mt-3 text-p1 ${weightCls[w]}`}>
                  The quick brown fox
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Colors */}
        <Section
          title="Colors"
          intro="Brand palette. Edit the --color-* tokens in globals.css to rebrand."
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] gap-4">
            {brandColors.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-md border border-line bg-surface"
              >
                <div className={`h-24 ${c.cls}`} />
                <div className="p-3">
                  <p className="text-p4 font-medium">{c.name}</p>
                  <p className="text-label text-fg-muted">{c.token}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons */}
        <Section
          title="Buttons"
          intro="Variants, sizes and states. Built from tokens, so they follow palette changes."
        >
          <div className="space-y-8">
            <div>
              <Tag>variants</Tag>
              <div className="mt-4 flex flex-wrap gap-3">
                {buttonVariants.map(([label, cls]) => (
                  <button key={cls} type="button" className={`btn ${cls}`}>
                    {label}
                  </button>
                ))}
                <button type="button" className="btn-tertiary">
                  Tertiary
                </button>
              </div>
            </div>
            <div>
              <Tag>sizes</Tag>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button type="button" className="btn btn-primary btn-sm">
                  Small
                </button>
                <button type="button" className="btn btn-primary">
                  Default
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Large
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Add"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <Tag>disabled</Tag>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" className="btn btn-primary" disabled>
                  Disabled
                </button>
                <button type="button" className="btn btn-outline" disabled>
                  Disabled
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Pills */}
        <Section
          title="Pills"
          intro="Filter buttons. Active state via aria-pressed or data-active."
        >
          <div className="flex flex-wrap gap-2">
            <button type="button" className="pill" aria-pressed="true">
              All
            </button>
            <button type="button" className="pill">
              Design
            </button>
            <button type="button" className="pill">
              Development
            </button>
            <button type="button" className="pill">
              Marketing
            </button>
          </div>
        </Section>

        {/* Forms */}
        <Section
          title="Form fields"
          intro="Inputs, textarea, hint and error states."
        >
          <div className="grid max-w-prose gap-6">
            <div className="field">
              <label className="field-label" htmlFor="sg-name">
                Name
              </label>
              <input id="sg-name" className="input" placeholder="Jane Doe" />
              <span className="field-hint">As it appears on your account.</span>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="sg-email">
                Email
              </label>
              <input
                id="sg-email"
                className="input"
                defaultValue="not-an-email"
                aria-invalid="true"
              />
              <span className="field-error">Enter a valid email address.</span>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="sg-msg">
                Message
              </label>
              <textarea
                id="sg-msg"
                className="textarea"
                placeholder="Write something…"
              />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="sg-dis">
                Disabled
              </label>
              <input
                id="sg-dis"
                className="input"
                placeholder="Not editable"
                disabled
              />
            </div>
          </div>
        </Section>

        {/* Selection controls */}
        <Section
          title="Selection controls"
          intro="Checkbox, radio and toggle, alone or inside an option card."
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-6 text-p4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox" defaultChecked />{" "}
                Checkbox
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sg-radio"
                  className="radio"
                  defaultChecked
                />{" "}
                Radio
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="sg-radio" className="radio" /> Radio
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  role="switch"
                  className="toggle"
                  defaultChecked
                />{" "}
                Toggle
              </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4">
              <label className="option-card">
                <input
                  type="checkbox"
                  className="checkbox mt-0.5"
                  defaultChecked
                />
                <span>
                  <span className="block text-p4 font-medium">
                    Email updates
                  </span>
                  <span className="block text-label text-fg-muted">
                    Product news once a month.
                  </span>
                </span>
              </label>
              <label className="option-card">
                <input
                  type="checkbox"
                  role="switch"
                  className="toggle mt-0.5"
                />
                <span>
                  <span className="block text-p4 font-medium">
                    Beta features
                  </span>
                  <span className="block text-label text-fg-muted">
                    Try things before they ship.
                  </span>
                </span>
              </label>
            </div>
          </div>
        </Section>

        {/* Shadows */}
        <Section title="Shadows" intro="Elevation scale, xxs to 3xl.">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,8rem),1fr))] gap-6">
            {shadows.map(([name, cls]) => (
              <div
                key={name}
                className={`flex h-24 items-center justify-center rounded-md bg-surface text-p4 ${cls}`}
              >
                {name}
              </div>
            ))}
          </div>
        </Section>

        {/* Radius */}
        <Section title="Radius" intro="Corner radius scale.">
          <div className="flex flex-wrap gap-4">
            {[
              ["xs", "rounded-xs"],
              ["sm", "rounded-sm"],
              ["md", "rounded-md"],
              ["lg", "rounded-lg"],
              ["xl", "rounded-xl"],
              ["pill", "rounded-pill"],
            ].map(([name, cls]) => (
              <div
                key={name}
                className={`flex h-20 w-28 items-center justify-center border border-line bg-bg-alt text-p4 ${cls}`}
              >
                {name}
              </div>
            ))}
          </div>
        </Section>

        {/* Cards */}
        <Section
          title="Cards"
          intro="Surface container with border, radius and shadow."
        >
          <div className="card max-w-prose">
            <h3 className="heading-5">Card title</h3>
            <p className="mt-2 text-p4 text-fg-muted">
              Cards use the surface, line and shadow tokens, so they adapt to
              dark mode.
            </p>
            <div className="mt-4">
              <button type="button" className="btn btn-primary btn-sm">
                Action
              </button>
            </div>
          </div>
        </Section>
      </div>

      <footer className="border-t border-line px-(--space-gutter) py-10 text-center text-p4 text-fg-muted">
        Edit tokens in <code>app/globals.css</code>.
      </footer>
    </main>
  );
}
