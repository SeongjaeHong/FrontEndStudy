import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./components/search-header.jsx", [
    route("/", "./routes/videos.jsx", { id: "base-root" }),
    route("/videos", "./routes/videos.jsx", { id: "base-root2" }),
    route("/results", "./routes/videos.jsx", { id: "search-result" }),
    route("/vid", "./routes/video-detail.jsx"),
  ]),

  ...prefix("prefix", [
    index("./routes/prefix1.jsx"),
    layout("./routes/prefix2.jsx", [route(":pid", "./team.tsx")]),
  ]),
] satisfies RouteConfig;
