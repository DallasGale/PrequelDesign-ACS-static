import "tsx/esm"
import {renderToStaticMarkup} from "react-dom/server"

export default function (eleventyConfig) {
  // We can add support for TypeScript too, at the same time:
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data)
        return renderToStaticMarkup(content)
      }
    },
  })

  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/css")

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["11ty.jsx", "11ty.tsx", "11ty.ts", "md", "html"],
  }
}
