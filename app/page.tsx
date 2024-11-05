import { getSiteConfig } from "./lib/getSiteConfig";

export default async function Home() {
  const { brandName, brandColor } = await getSiteConfig();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold" style={{ color: brandColor }}>
          {brandName}
        </h1>

        <div
          className="p-6 border rounded-lg"
          style={{ borderColor: brandColor }}>
          <p>Current site configuration:</p>
          <pre className="mt-2 p-4 bg-gray-100 rounded">
            {JSON.stringify({ brandName, brandColor }, null, 2)}
          </pre>
        </div>

        <p className="text-sm opacity-70">
          Edit <code className="font-mono">middleware.ts</code> to change site
          configuration
        </p>
      </main>
    </div>
  );
}
