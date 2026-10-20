import type { NextConfig } from "next";
import { RETIRED_POSTS } from "./app/blog/retired";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  /**
   * Artigos com assunto repetido redirecionam (301) para a versão mais completa.
   * Assim quem tem o link antigo — e o próprio Google — chega no artigo certo.
   */
  /** Arquivos da marca (logo/avatar) podem ser baixados por outras páginas. */
  async headers() {
    return [{ source: "/marca/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  },
  async redirects() {
    return Object.entries(RETIRED_POSTS).map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
